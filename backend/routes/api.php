<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;




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
    Route::put('email-update/{id}', [UserController::class,'updateEmail']);
    Route::put('password-update/{id}', [UserController::class,'updatePassword']);
    Route::put('phone-update/{id}', [UserController::class,'updatePhone']);
    Route::put('address-update/{id}', [UserController::class,'updateAddress']);
    Route::post('verify-password/{id}', [UserController::class,'verifyPassword']);
    Route::delete('delete-account/{id}', [UserController::class,'deleteAccount']);
});
