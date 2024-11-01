<script>
  import { counter } from '$lib/Store.svelte.js';
  function addition(){
    counter.county = counter.county + 1;
  }
  function deduction(){
    counter.county = counter.county - 1;
  }
</script>

<div class="container w3-center">
   <h1>I am Component Two</h1>
   <h3>Counter Value is {counter.county}</h3>
   <button class="w3-button w3-green" onclick={addition}>Addition</button>
   <button class="w3-button w3-red" onclick={deduction}>Deduction</button>
</div>

<style>
   
</style>