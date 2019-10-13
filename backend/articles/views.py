from .serializers import ArticleSerializer
from .models import Article
from rest_framework.generics import (ListAPIView,
                                     RetrieveAPIView,
                                     CreateAPIView,
                                     UpdateAPIView,
                                     DestroyAPIView
                                     )
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


# class ArticleListView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#
#
# class ArticleDetailView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#
#
# class ArticleCreateView(CreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#
#
# class ArticleUpdateView(UpdateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#
#
# class ArticleDestroyView(DestroyAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Article instances.
    """
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permission_classes = [IsAuthenticated]
