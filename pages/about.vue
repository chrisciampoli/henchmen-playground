<template>
  <div class="min-h-screen bg-neutral-50 py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold mb-8 text-center text-neutral-900 animate-fade-in">About Us</h1>
      
      <div class="max-w-4xl mx-auto">
        <!-- Mission Section -->
        <div class="card mb-12 animate-slide-up">
          <h2 class="text-3xl font-semibold mb-6 text-primary-700 border-b border-neutral-200 pb-4">Our Mission</h2>
          <p class="text-lg mb-6 text-neutral-700 leading-relaxed">
            We are building the next generation of web experiences with Nuxt.js, TypeScript, and a comprehensive design system. 
            Our mission is to provide developers with a robust, scalable, and enjoyable platform to build amazing applications 
            with consistent, beautiful user interfaces.
          </p>
          <p class="text-lg text-neutral-700 leading-relaxed">
            Through careful attention to design tokens, accessibility, and developer experience, we're creating tools that 
            empower teams to build faster while maintaining the highest quality standards.
          </p>
        </div>

        <!-- What We Offer Section -->
        <div class="card mb-12 animate-slide-up" style="animation-delay: 0.1s;">
          <h3 class="text-3xl font-semibold mb-6 text-secondary-700">What We Offer</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-xl font-semibold text-neutral-900 mb-4 flex items-center">
                <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                Technical Excellence
              </h4>
              <ul class="space-y-3 text-neutral-700">
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">•</span>
                  Modern Vue 3 Composition API usage with TypeScript
                </li>
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">•</span>
                  Server-side rendering with Nuxt 3 for optimal performance
                </li>
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">•</span>
                  Comprehensive testing and type safety
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-xl font-semibold text-neutral-900 mb-4 flex items-center">
                <span class="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                Design System
              </h4>
              <ul class="space-y-3 text-neutral-700">
                <li class="flex items-start">
                  <span class="text-secondary-500 mr-2">•</span>
                  Custom color palettes with semantic naming
                </li>
                <li class="flex items-start">
                  <span class="text-secondary-500 mr-2">•</span>
                  Consistent typography and spacing scales
                </li>
                <li class="flex items-start">
                  <span class="text-secondary-500 mr-2">•</span>
                  Reusable component library with Tailwind CSS
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Values Section -->
        <div class="card mb-12 animate-slide-up" style="animation-delay: 0.2s;">
          <h3 class="text-3xl font-semibold mb-6 text-accent-700">Our Values</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center p-6 bg-neutral-50 rounded-xl">
              <div class="text-4xl mb-4">🎯</div>
              <h4 class="text-lg font-semibold text-neutral-900 mb-2">Quality First</h4>
              <p class="text-neutral-600">Every component and token is carefully crafted for consistency and usability.</p>
            </div>
            <div class="text-center p-6 bg-neutral-50 rounded-xl">
              <div class="text-4xl mb-4">🚀</div>
              <h4 class="text-lg font-semibold text-neutral-900 mb-2">Developer Experience</h4>
              <p class="text-neutral-600">Tools and patterns that make development faster and more enjoyable.</p>
            </div>
            <div class="text-center p-6 bg-neutral-50 rounded-xl">
              <div class="text-4xl mb-4">♿</div>
              <h4 class="text-lg font-semibold text-neutral-900 mb-2">Accessibility</h4>
              <p class="text-neutral-600">Inclusive design that works for everyone, built into every component.</p>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center animate-slide-up" style="animation-delay: 0.3s;">
          <div class="card bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
            <h3 class="text-2xl font-semibold text-neutral-900 mb-4">Ready to Get Started?</h3>
            <p class="text-lg text-neutral-700 mb-6 max-w-2xl mx-auto">
              Explore our design system and see how it can accelerate your next project.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <nuxt-link to="/" class="btn-primary">
                View Design System
              </nuxt-link>
              <button class="btn-secondary">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Placeholder script for the About page
</script>

<style scoped>
/* Scoped styles for the About page */
</style>