<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Auth\AuthenticationController;
use App\Http\Controllers\Auth\VerificationController;
use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::post('/login', [LoginController::class, 'login'])->name('login');
Route::post('/register', [RegisterController::class, 'register'])->name('register');

Route::get('posts', [PostController::class, 'get']);
Route::get('allPosts', [PostController::class, 'getAll']);
Route::get('curentPage', [PostController::class, 'pagination']);
Route::get('authorPosts/{user_id}', [PostController::class, 'authorPosts']);
Route::get('categoryPosts/{category_id}', [PostController::class, 'categoryPosts']);
Route::get('orderPosts', [PostController::class, 'getOrderPosts']);
Route::get('single/{id}', [PostController::class, 'post']);

Route::get('categories', [CategoryController::class, 'get']);

Route::middleware('auth:api')->group(function () {
    Route::get('email/verify/{hash}', [VerificationController::class, 'verify'])->name('verification.verify');
    Route::get('email/resend', [VerificationController::class, 'resend'])->name('verification.resend');
    Route::get('user', [AuthenticationController::class, 'user'])->name('user');
    Route::post('logout', [LoginController::class, 'logout'])->name('logout');
    Route::post('posts', [PostController::class, 'store']);
    Route::put('posts', [PostController::class, 'edit']);
    Route::delete('posts/{id}', [PostController::class, 'delete']);
});
