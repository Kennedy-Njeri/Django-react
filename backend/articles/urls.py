from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import ArticleViewSet
# from .views import ArticleListView, ArticleDetailView, ArticleCreateView, ArticleUpdateView, ArticleDestroyView, ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("", ArticleViewSet)
urlpatterns = router.urls

urlpatterns = [
    path('', include(router.urls)),
    # path("", ArticleListView.as_view()),
    # path("create", ArticleCreateView.as_view()),
    # path("<pk>", ArticleDetailView.as_view()),
    # path("<pk>/update", ArticleUpdateView.as_view()),
    # path("<pk>/delete", ArticleDestroyView.as_view()),

]
