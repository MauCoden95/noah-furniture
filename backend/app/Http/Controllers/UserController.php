<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;


class UserController extends Controller
{
   
   

    public function register(Request $request){
        $data = $request->all();
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'dni' => 'required|integer|max:255',
            'phone' => 'required|integer|max:255',
            'address' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator) {
            $user = new User();
            $user->name = $data['name'];
            $user->dni = $data['dni'];
            $user->phone = $data['phone'];
            $user->address = $data['address'];
            $user->city = $data['city'];
            $user->email = $data['email'];
            $user->password = Hash::make($data['password']);
            $result = $user->save();

            if ($result) {
                return response()->json([
                    'status' => 200,
                    'success' => true,
                    'message' => 'Registro exitoso!!!'
                ]);
            }else{
                return response()->json([
                    'status' => 400,
                    'success' => false,
                    'mesage' => 'Hubo un error al registrar usuario'
                ]);
            }

           
        }else{
            return response()->json([
                'status' => 400,
                'success' => false,
                'error' => $validator->errors()
            ]);
        
        }

        
    }


    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'success' => false,
                'error' => $validator->errors()
            ]);
        }

        $credentials = $request->only('email', 'password');

        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json([
                'status' => 401,
                'success' => false,
                'message' => 'Credenciales incorrectas'
            ]);
        }

        return response()->json([
            'status' => 200,
            'success' => true,
            'token' => $token,
            'user' => JWTAuth::user()
        ]);
    }
}


