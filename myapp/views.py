from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from .models import Section, Client,Video ,Card
from django.core.mail import send_mail

def home(request):
    videos = Video.objects.all() 
    sections = [
        {"name": "", "url": "home"},
        {"name": "design-and-graphic", "url": "/design-and-graphic/"},
    ]

    filter_by = request.GET.get('filter_by')
    if filter_by:
        sections = Section.objects.filter(title__icontains=filter_by)
    else:
        sections = Section.objects.all()
    
    clients = Client.objects.all()
    context = {
        'sections': sections,
        'clients': clients,
        'videos':videos
    }

    if request.method == 'POST':
        name = request.POST['name']
        lastname = request.POST['lastname']
        subject = request.POST['subject']
        email = request.POST['email']
        message = request.POST['message']

        # Send the email
        send_mail(
            subject=subject,
            message=message,
            from_email=email,
            recipient_list=[email],
            fail_silently=False  # Specify it only once
        )
        return redirect('thank_you') 
    return render(request, 'home.html', context)


def thank_you(request):
    return render(request, 'thank_you.html')

def design_and_graphic(request):
    design_and_graphic = get_object_or_404(Section, title='Design and Graphic')
    cards = Card.objects.filter(section=design_and_graphic)
    return render(request, 'designandghrapic.html', {'section': design_and_graphic, 'cards': cards})

def programing_and_development(request):
    programming_and_development = get_object_or_404(Section, title='Programming and Development')
    cards = Card.objects.filter(section=programming_and_development)
    return render(request, 'programminganddevelopment.html', {'section': programming_and_development, 'cards': cards})

def writing_and_translation(request):
    writing_and_translation = get_object_or_404(Section, title='Writing and Translation')
    cards = Card.objects.filter(section=writing_and_translation)
    return render(request, 'writingandtranslation.html', {'section': writing_and_translation, 'cards': cards})

def digital_marketers(request):
    digital_marketers = get_object_or_404(Section, title='Digital Marketers')
    cards = Card.objects.filter(section=digital_marketers)
    return render(request, 'digitalmarketers.html', {'section': digital_marketers, 'cards': cards})

def image_and_vedio(request):
    image_and_vedio = get_object_or_404(Section, title='Image and Video')
    cards = Card.objects.filter(section=image_and_vedio)
    return render(request, 'imageandvedio.html', {'section': image_and_vedio, 'cards': cards})