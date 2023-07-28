/** @type {import('./$types').PageLoad} */



let data =  [

    'IMG_20220430_153552.jpg',
    'IMG_20220430_154038.jpg',
    'IMG_20220430_154915.jpg',
    'IMG_20220430_155111.jpg',
    'IMG_20220430_155340.jpg',
    'IMG_20220430_155615.jpg',
    'IMG_20220430_155624.jpg',
    'IMG_20220430_155733.jpg',
    'IMG_20220430_155809.jpg',
    'IMG_20220430_155814.jpg',
    'IMG_20220430_160253.jpg',
    'IMG_20220430_160346.jpg',
    'IMG_20220430_160355.jpg',
    'IMG_20220430_160441.jpg',
    'IMG_20220430_160447.jpg',
    'IMG_20220430_192651.jpg',
    'IMG_20220430_192757.jpg',
    'Polish_20220213_160216685.jpg',
    'PSX_20210325_175812.jpg',
    'PSX_20210325_181320.jpg',
    'PSX_20210325_183152.jpg',
    'Snapchat-1408920167.jpg',
    'Snapchat-1620455734.jpg',
    'Snapchat-1920998051.jpg',
    'Snapchat-1971901119.jpg',
    'Snapchat-663752299.jpg',
    'Snapchat-877936041.jpg'
  ]

let imagedata = data.map((image)=>{

            let yr= image.slice(4, 8)
            let mn= image.slice(8, 10)
            let dy= image.slice(10, 12)
            let text =new Date(Date.UTC(yr, mn, dy)) 
            if (text == "Invalid Date"){
                text = new Date()
            }
            return {
                image,
                text
            }      
    }).reverse()

export async function load() {
    return {
        imagedata
    };
};