from rest_framework import serializers
from .models import Track, Album, Author, AlbumTrack


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = '__all__'


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = '__all__'


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


class AlbumTrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlbumTrack
        fields = '__all__'
