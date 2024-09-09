<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    
    /**
     * Display all products.
     */
    public function showAllProducts()
    {
        $products = Product::all();

        return response()->json($products);
    }

    
    /**
     * Display all products of a specific category.
     */
    public function showProductsByCategory($categoryName)
    {
        if ($categoryName == '') {
            $products = Product::all();
        } else {
            $products = Product::whereHas('category', function($query) use ($categoryName) {
                $query->where('name', $categoryName);
            })->get();
        }

        return response()->json($products);
    }
   



    public function getRandomProducts()
    {
        $products = Product::inRandomOrder()->take(6)->get();

        return response()->json($products);
    }




    public function getProductById($id){
        $product = Product::find($id);

        return response()->json($product);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
