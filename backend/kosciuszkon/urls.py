from django.contrib import admin
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from django.urls import path, re_path
from kosciuszkon.views import HealthCheckView, CalendarApiView, ResourceApiView, CalendarDatesApiView, FeedInfoApiView


schema_view = get_schema_view(
   openapi.Info(
      title="API Documentation",
      default_version='v1',
      description="API description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@example.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('health-check/', HealthCheckView.as_view(), name='health-check'),

    path('calendar/', CalendarApiView.as_view(), name='calendar'),
    path('calendar/<str:id>/', CalendarApiView.as_view(), name='calendar'),

    path('calendar-dates/', CalendarDatesApiView.as_view(), name='calendar-dates'),
    path('calendar-dates/<str:id>/', CalendarDatesApiView.as_view(), name='calendar-dates'),

    path('feed-info/', FeedInfoApiView.as_view(), name='feed-info'),
    path('feed-info/<str:id>/', FeedInfoApiView.as_view(), name='feed-info'),
    
    path('routes/', ResourceApiView.as_view(), name='routes'),
    path('routes/<str:id>', ResourceApiView.as_view(), name='routesById'),

    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
]