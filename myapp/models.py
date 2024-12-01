from django.db import models

# Create your models here.

class Section(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title
    
class Card(models.Model):
    section = models.ForeignKey(Section, related_name='cards', on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    urlName = models.CharField(max_length=200, blank=True, null=True)
    url = models.URLField(max_length=5000,blank=True, null=True)
    body = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title

class Client(models.Model):
    name = models.CharField(max_length=255)
    subname = models.CharField(max_length=255, blank=True)  # Optional field
    image = models.ImageField(upload_to='images/')
    description = models.TextField(blank=True)  # Optional field

    def __str__(self):
        return self.name

class Video(models.Model):
    video_file = models.FileField(upload_to='videos/')
