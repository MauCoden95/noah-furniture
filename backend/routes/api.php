<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;

/*
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');*/

Route::controller(ProductController::class)->group(function () {
   Route::get('/products', 'showAllProducts');
   Route::get('/products-random', 'getRandomProducts');
   Route::get('/products/{categoryName}', 'showProductsByCategory');
   Route::get('/product/{id}', 'getProductById');
});

Route::group(['middleware' => 'api'], function($routes) {
    Route::post('user-register', [UserController::class,'register']);
    Route::post('user-login', [UserController::class,'login']);
    Route::get('profile', [UserController::class,'profile']);
});
