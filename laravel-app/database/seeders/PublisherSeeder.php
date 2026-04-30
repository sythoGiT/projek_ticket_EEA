<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PublisherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
    \App\Models\Publisher::create(['name' => 'Gramedia', 'city' =>'Jakarta']);
    \App\Models\Publisher::create(['name' => 'Erlangga', 'city' =>'Bandung']);
    }
}
