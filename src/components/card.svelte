<script>
    export let image
    export let text
</script>
<article class="card">
    <div class="cd">
        <div class="image">
            <img src="/faith/{image}" alt="card">
        </div>
        <div class="text">
            <p>
                {text}
            </p>
        </div>
    </div>
</article>
<style lang="scss">
    .card{
        margin:20px 10px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.478) 0 4px 4px 0;
        border-radius: 4px;
        .cd{
            .image{
                img{
                    height: 350px;
                    width: 100%;  
                    object-fit:cover;
                    filter: brightness(70%);
                }
            }

            .text{
                padding: 10px;
                color: grey;
                font-size: 13px;
                font-weight: 500;
            }
        }
        & :hover .image img{
            object-fit: scale-down;
            filter: brightness(100%);
        }
    }
</style>