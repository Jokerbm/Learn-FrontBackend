from django.shortcuts import render
from .forms import ProductForm, RawProductForm
from .models import Product
# Create your views here.

def product_create_view(request):
    my_form = RawProductForm()
    context = {
        "form": my_form
    }
    return render(request, "products/product_create.html", context)

# def product_create_view(request):
#     # print(request.GET)
#     # print(request.POST)
#     if request.method == 'POST':
#         m_new_title = request.POST.get('title')
#         print(m_new_title)
#     #product.object.create(title)
#     context = {
#     }
#     return render(request, "products/product_create.html", context)

# def product_create_view(request):
#     form = ProductForm(request.POST or None)
#     if form.is_valid():
#     	form.save()
#     	form = ProductForm()
#     context = {
#     	'form': form 
#     }
#     # my_context = {
#     #     'title': obj.title,
#     #     'description': obj.description
#     # }
#     return render(request, "products/product_create.html", context)


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
