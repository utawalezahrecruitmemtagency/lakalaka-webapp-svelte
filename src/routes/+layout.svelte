<script>
  import "../app.scss";
  /** @type {import('./$types').LayoutData} */
  export let data;
</script>

<svelte:head>
  <title>&#x2764;</title>
</svelte:head>
<article class="layout">
  <nav>
    <ul>
      <li>
        <h1>
          <a href="/">f&#x2764;ith</a>
        </h1>
      </li>
      <li>
        <h1>_</h1>
      </li>
    </ul>
  </nav>
</article>
<slot />

<style lang="scss">
  .layout {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    nav {
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.137);
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
          a{
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 700;
            color: transparent;
            background: var(--rpc);
            -webkit-background-clip: text;
            background-clip: text;
          }
        }
      }
    }

  }
</style>
