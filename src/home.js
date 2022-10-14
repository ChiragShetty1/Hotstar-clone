const Home=() =>{
    let images =[
        {img:"https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-09-21/Desk_MasterChefAustraliaNS-9875146c-696e-49fc-82aa-ee739909adf7.jpg"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7383/1357383-v-6c8546f2e7bd"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8317/1328317-v-56412010beba"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6531/1326531-v-e6302c49fcd9"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7977/1317977-v-2b6393692cd1"}
    ]
    return (
        <div className="home">
            <div className="poster">
               <img  height={500} width={1400} src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-09-21/Desk_MasterChefAustraliaNS-9875146c-696e-49fc-82aa-ee739909adf7.jpg" alt=" "/>
            </div>
            <div className="movielist">
                {images.map((data)=>{
                    return(
                        <img height={260} width={200} src={data.img} alt=""/>
                    )
                })}
                
            </div>
        </div>
    )
}
export default Home;