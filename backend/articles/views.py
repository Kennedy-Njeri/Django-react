from django.shortcuts import render
from .serializers import ArticleSerializer
from .models import Article
from rest_framework.generics import ListAPIView, RetrieveAPIView


class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
