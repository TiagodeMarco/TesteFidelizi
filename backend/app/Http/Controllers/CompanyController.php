<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function getAll(): \Illuminate\Http\JsonResponse
    {
        return response()->json(['working']);
    }
}
