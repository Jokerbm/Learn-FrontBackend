from django.shortcuts import render
from .forms import ProductForm
from .models import Product
# Create your views here.

def product_create_view(request):
    form = ProductForm(request.POST or None)
    if form.is_valid():
    	form.save()
    	form = ProductForm()
    context = {
    	'form': form 
    }
    # my_context = {
    #     'title': obj.title,
    #     'description': obj.description
    # }
    return render(request, "products/product_create.html", context)


def product_detail_view(request):
    obj = Product.objects.get(id=1)
    # my_context = {
    #     'title': obj.title,
    #     'description': obj.description
    # }
    my_context = {
        'object': obj
    }
    return render(request, "products/product_detail.html", my_context)
