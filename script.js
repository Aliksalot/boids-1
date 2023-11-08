        
        const update = () => {
            arr.forEach(b => {
                b.x += Math.cos(b.dir) * b.vel
                b.y += Math.sin(b.dir) * b.vel

                if(b.vel < vel){
                    b.vel += 1
                }

                if(b.x > 800)
                    b.x = 0

                if(b.y > 600)
                    b.y = 0

                if(b.y < 0){
                    b.y = 600
                }

                if(b.x < 0){
                    b.x = 800
                }

                let neighbour_dirs = 0
                let neigbour_cnt = 0

                arr.forEach(b1 => {
                    const dist = Math.sqrt(Math.pow(b.x - b1.x, 2) + Math.pow(b1.y - b.y, 2))
                    if(dist < vr * ali && dist !== 0 && !b1.isColliding(b.x, b.y)){
                        neigbour_cnt ++;
                        neighbour_dirs += b1.dir; 
                    }
                })

                if(neigbour_cnt !== 0)
                    b.dir = neighbour_dirs / neigbour_cnt

                arr.forEach(b1 => {
                    const dist = Math.sqrt(Math.pow(b.x - b1.x, 2) + Math.pow(b1.y - b.y, 2))
                    if(dist < vr  && dist !== 0){

                        if(b1.isColliding(b.x + Math.cos(b.dir) * b.vel, b.y + Math.sin(b.dir) * b.vel) || b1.isColliding(b.x, b.y)){
                            console.log('about to collide')
                            b.dir += Math.PI * sep
                            
                        }else{
                            b.dir = -Math.asin(Math.abs(b.y - b1.y)/dist) * coh * Math.PI * 2
                            b1.dir = Math.asin(Math.abs(b.y - b1.y)/dist) * coh * Math.PI * 2
                            
                        }


                    }
                })
            })
        }

	const draw = (context) => {

	    console.log("drawing")

	    context.fillStyle = 'white'
	    context.fillRect(0,0,800,600);

        context.fillStyle = "blue"

        arr.forEach(b => {
            context.fillRect(b.x, b.y, birdSize, birdSize)
        });

        requestAnimationFrame(() => draw(context))
	}

