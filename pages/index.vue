<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <header class="bg-white shadow-md py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to Henchmen Playground
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Building the next generation of web experiences with Nuxt 3 and Tailwind CSS.
        </p>
        <nuxt-link to="/about" class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
          Learn More
        </nuxt-link>
      </div>
    </header>

    <!-- Features Grid -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Feature 1 -->
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
            <div class="text-indigo-500 mb-4">🚀</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Blazing Fast Performance</h3>
            <p class="text-gray-600">Built on Nuxt 3, ensuring server-side rendering and optimal client-side performance.</p>
          </div>
          <!-- Feature 2 -->
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
            <div class="text-teal-500 mb-4">🎨</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Utility-First Styling</h3>
            <p class="text-gray-600">Leveraging Tailwind CSS for rapid, consistent, and highly customizable styling.</p>
          </div>
          <!-- Feature 3 -->
          <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
            <div class="text-yellow-500 mb-4">💻</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">TypeScript Safety</h3>
            <p class="text-gray-600">Full type checking across the stack for robust and maintainable codebases.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Client-side script for the landing page
</script>
