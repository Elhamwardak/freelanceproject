# Generated by Django 5.1.2 on 2024-11-09 18:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_section_delete_card'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='section',
            name='content',
        ),
    ]
