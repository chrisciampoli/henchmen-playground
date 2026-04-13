<template>
  <div class="min-h-screen bg-white text-gray-900">
    <!-- Navigation Bar -->
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="text-2xl font-bold text-indigo-600">HenchmenPlayground</div>
          <nav class="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#features" class="hover:text-indigo-600 transition duration-150">Features</a>
            <a href="#pricing" class="hover:text-indigo-600 transition duration-150">Pricing</a>
            <a href="#about" class="hover:text-indigo-600 transition duration-150">About</a>
            <a href="#" class="text-indigo-600 border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition duration-150">Sign In</a>
          </nav>
          <button class="md:hidden p-2 text-gray-600 hover:text-indigo-600">
            <!-- Mobile Menu Icon -->
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section class="pt-24 pb-20 sm:pt-32 sm:pb-28 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 lg:leading-tight">
            The Future of <span class="text-indigo-600">AI Interaction</span> is Here.
          </h1>
          <p class="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Build pixel-perfect, intelligent applications with our platform. Seamlessly integrate advanced AI models into your next generation of software.
          </p>
          <div class="mt-10 flex justify-center space-x-4">
            <a href="#" class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
              Get Started Free
            </a>
            <a href="#" class="inline-flex items-center px-8 py-3 border-2 border-indigo-200 text-base font-medium rounded-full text-indigo-700 bg-white hover:bg-indigo-50 transition duration-300 transform hover:scale-105">
              View Demo
            </a>
          </div>
          <!-- Placeholder for Screenshot Mockup -->
          <div class="mt-16 max-w-6xl mx-auto bg-white p-4 rounded-xl shadow-2xl border border-gray-100">
            <div class="h-96 bg-gray-200 flex items-center justify-center rounded-lg text-gray-500 text-lg">
              [Placeholder for ServiceAI Clone Screenshot Mockup]
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="py-24 sm:py-32 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Core Capabilities</h2>
            <p class="mt-2 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to build intelligent experiences.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
            <!-- Feature 1 -->
            <div class="pt-10 text-center">
              <div class="flex justify-center mb-4">
                <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 sm:text-2xl">Advanced NLP</h3>
              <p class="mt-2 text-base text-gray-500">
                Understand complex user intent and extract structured data from unstructured text with high accuracy.
              </p>
            </div>

            <!-- Feature 2 -->
            <div class="pt-10 text-center">
              <div class="flex justify-center mb-4">
                <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 sm:text-2xl">Multi-Modal Input</h3>
              <p class="mt-2 text-base text-gray-500">
                Process text, images, and audio inputs simultaneously for richer, context-aware interactions.
              </p>
            </div>

            <!-- Feature 3 -->
            <div class="pt-10 text-center">
              <div class="flex justify-center mb-4">
                <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"></path></svg>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 sm:text-2xl">API First Design</h3>
              <p class="mt-2 text-base text-gray-500">
                Deploy powerful AI logic via simple, scalable REST or GraphQL endpoints for any stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section id="cta" class="py-24 sm:py-32 bg-indigo-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Ready to build your next generation application?
          </h2>
          <p class="mt-4 text-xl text-indigo-200 max-w-3xl mx-auto">
            Join thousands of developers building the future with reliable, scalable AI infrastructure.
          </p>
          <div class="mt-10 flex justify-center space-x-4">
            <a href="#" class="inline-flex items-center px-10 py-4 border border-transparent text-lg font-medium rounded-full shadow-xl text-indigo-700 bg-white hover:bg-indigo-50 transition duration-300 transform hover:scale-105">
              Start Building Now
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 border-t border-gray-200 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
        <p class="mb-4">&copy; {new Date().getFullYear()} HenchmenPlayground. All rights reserved.</p>
        <div class="space-x-6">
          <a href="#" class="hover:text-indigo-600">Terms</a>
          <a href="#" class="hover:text-indigo-600">Privacy</a>
          <a href="#" class="hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Client-side script for dynamic content if needed, otherwise empty for static build
</script>

<style>
/* Global styles can be added here if necessary */
</style>