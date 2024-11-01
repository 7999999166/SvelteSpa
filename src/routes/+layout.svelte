    <script>
        import '../app.css';
        import Header from '$lib/Header.svelte';
        let { children } = $props();
    </script>
    <svelte:head>
       <script src="/bootstrap.bundle.min.js"></script> 
       <script src="/axios.min.js"></script>
       <link rel="stylesheet" href="/sal.css">
       <script src="/sal.js"></script>
       <link rel="stylesheet" href="/bootstrap.min.css"> 
       <link rel="stylesheet" href="/w3.css">  
       <link rel="stylesheet" href="/bootstrap-icons.min.css">
     </svelte:head>
     <div class="app">
	<Header />
	<main>
		{@render children()}
	</main>

     </div>

     <style>
	
     </style>