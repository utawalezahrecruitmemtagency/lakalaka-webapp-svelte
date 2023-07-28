
<article class="sectionone">
    <div class="art">
        <div class="maintxt">
            <h2>
                <span>FAITH</span><span>LAKA.LAKA</span><span><strong>- 🖤 - </strong></span><span> PETER</span><span>butao </span>
            </h2>
            <div class="line"></div>
            <fieldset>
                <p>Each day, i love you more. Today more than yesterday and less than tommorrow</p>
               
                <p>ROSEMONDE GERRD.</p>
            </fieldset>
            <strong class="syml">
                <span>S</span><span>Y</span><span>M</span><span>L</span>
            </strong>

        </div>
    </div>
    
</article>
<style lang="scss">
    article{    
        height: 100vh;
        background: var(--bc);
        .art{
                background-image: url('./photo1.jpg');
                background-blend-mode: multiply;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                background-color: rgba(0, 0, 0, 0.637);
                max-width: var(--mxw);
                margin: auto;
                border-bottom-left-radius: 1px;
                height: 100vh;
                .maintxt{   
                    padding: 5px;
                    padding-top: 15vh;
                    text-align: center;
                    h2{
                        font-size: 48px;
                        color: transparent;
                        font-weight: 900;
                        text-transform: uppercase;
                        letter-spacing: 1.3px;
                        text-rendering: optimizelegibility;
                        background: var(--gbc);
                        -webkit-background-clip: text;
                        background-clip: text;
                        letter-spacing: 9px;
                        margin: 10px 0;
                        span{
                            justify-content: center;
                            display: flex;
                            flex-wrap: wrap;
                        }
                        span:nth-child(3){
                            background: var(--rpc);
                            font-size: 1.8rem;
                            -webkit-background-clip: text;
                            background-clip: text;                        
                            
                        }         
                    }
                    p{
                        color: white;
                        font-size: 0.95rem;
                        font-weight: 500;                    
                        letter-spacing: 1.6px;
                        padding: 5px 20px;


                    }
                    .syml{
                        color: var(--rc);
                        font-weight: 900;
                        letter-spacing: 2.7px;
                        span{
                            font-size: 3rem;
                            box-shadow:0 0 20px rgba(0, 0, 0, 0.07);
                            animation:bouncer cubic-bezier(.455,.03,.515,.955) .75s infinite alternate;
                        }                        
                        span:nth-child(5n+1){
                                            
                            animation-delay:0
                        }
                        span:nth-child(5n+2){
                            animation-delay:calc(0s + (.1s * 12))
                    
                        }
                        span:nth-child(5n+3){
                    
                            animation-delay:calc(0s + (.1s * 2))
                        }
                        span:nth-child(5n+4){
                            
                            animation-delay:calc(0s + (.1s * 4))
                        }
                        
                    }
                    .line{
                        padding: 20px;
                    }
                }
            }
    }
    
    @keyframes bouncer{
        to{
                box-shadow:0 0 20px rgba(0,0,0,.3);
                transform:scale(1.55) translateY(-20px);
                font-size: 0.9rem;
                
                
            }
        }
        // .line{
        //     opacity: 100%;
        // } 

    
</style>