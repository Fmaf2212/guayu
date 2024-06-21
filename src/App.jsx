import React, { useEffect, useState } from 'react';
import './App.css'
import logo from './assets/images/logo.png'
import fraseFirstBg from './assets/images/fraseFirstBg.png'
import bgTopMain from './assets/images/bgTopMain.webp'
import bgTopMain1x from './assets/images/bgTopMain1x.webp'
import saqsaywaman from './assets/images/saqsaywaman.webp'
import unProductoDeSN from './assets/images/unProductoDeSN.png'
import barraAndina3x from './assets/images/barraAndina3x.png'
import ramaDerecha from './assets/images/ramaDerecha.png'
import bgAzul3x from './assets/images/bgAzul3x.png'
import bgAzul1x from './assets/images/bgAzul1x.png'
import bajoEnCalorias from './assets/images/bajoEnCalorias.png'
import sinOctogonos from './assets/images/sinOctogonos.png'
import botellaGuayuAzul3x from './assets/images/botellaGuayuAzul3x.png'
import decoracionAndino from './assets/images/decoracionAndino.png'
import bgVerde1x from './assets/images/bgVerde1x.png'
import bgVerde3x from './assets/images/bgVerde3x.png'
import botellaGuayuVerde from './assets/images/botellaGuayuVerde.png'
import hojaDeCocaLegal from './assets/images/hojaDeCocaLegal.webp'
import ramaIzquierda from './assets/images/ramaIzquierda.png'
import bgWhiteLineas from './assets/images/bgWhiteLineas.png'
import bgRio3x from './assets/images/bgRio3x.webp'
import bgRio1x from './assets/images/bgRio1x.png'
import carbonNeutral from './assets/images/carbonNeutral.png'
import bgRedesSociales from './assets/images/bgRedesSociales.png'
import iconFacebook from './assets/images/iconFacebook.png'
import iconInstagram from './assets/images/iconInstagram.png'
import botellaGuayuAzul3xV2 from './assets/images/botellaGuayuAzul3xV2.webp'

function App() {
  const [backgroundTopMainSize, setBackgroundTopMainSize] = useState("100% 1040px");
  const [backgroundImage, setBackgroundImage] = useState(bgAzul3x);
  const [backgroundImage2, setBackgroundImage2] = useState(bgVerde3x);
  const [backgroundSize, setBackgroundSize] = useState("100% 320px");
  const [backgroundSizeRio, setBackgroundSizeRio] = useState(bgRio3x);
  const [backgroundTopMain, setBackgroundTopMain] = useState(bgTopMain);

  const updateBackgroundImage = () => {
    if (window.innerWidth < 768) {
      setBackgroundImage(bgAzul1x);
      setBackgroundImage2(bgVerde1x);
      setBackgroundSize("cover");
      setBackgroundSizeRio(bgRio1x);
      setBackgroundTopMain(bgTopMain1x);
      setBackgroundTopMainSize("cover");
    } else {
      setBackgroundImage(bgAzul3x);
      setBackgroundImage2(bgVerde3x);
      setBackgroundSize("100% 320px");
      setBackgroundSizeRio(bgRio3x);
      setBackgroundTopMain(bgTopMain);
      setBackgroundTopMainSize("100% 1040px");
    }
  };

  useEffect(() => {
    updateBackgroundImage();
    window.addEventListener('resize', updateBackgroundImage);

    return () => {
      window.removeEventListener('resize', updateBackgroundImage);
    };
  }, []);

  return (
    <>
      <section className='h-[1010px] bg-no-repeat bg-top max-sm:bg-center relative z-20' style={{backgroundImage: `url(${backgroundTopMain})`, backgroundSize: backgroundTopMainSize}}>
        <header>
          <nav className='max-w-[801px] w-full m-auto pt-8'>
            <img src={logo} width={91} alt="logo" className='max-lg:ml-8 max-sm:hidden max-md:hidden' />
          </nav>
        </header>
        <section className='h-full max-h-[960px] flex flex-col items-center justify-between'>
          <img src={fraseFirstBg} width={361} alt="fraseFirstBg" className='max-sm:w-[310px] max-sm:mt-24 max-md:mt-20' />
          <br />
          <span></span>
          <br />
          <h1 className='text-white text-[75px] max-sm:text-5xl max-sm:mt-40 font-GratelosDisplay'>LA RAÍZ DE TU ENERGÍA</h1>
          <br />
          <span></span>
        </section>
        {/* <img src={ramaFirstBg3x} width={874} alt="ramaFirstBg3x" className='absolute bottom-[122px] lg:-bottom-[75px] left-1/2 -translate-x-1/2 z-30' /> */}
      </section>
      <section className='max-md:h-[714px] h-[589px] bg-no-repeat bg-center relative z-10 -mt-[220px] flex flex-col items-center justify-center gap-28' style={{backgroundImage: `url(${saqsaywaman})`, backgroundSize: "876px"}}>
        <span></span>
        <p className='text-white max-[400px]:text-[14px] text-base max-[769px]:text-[22px] max-sm:text-base max-[769px]:max-w-[90%] max-w-[408px] w-full text-center px-[39px] leading-tight max-[500px]:leading-normal'>Machu Picchu, Moray, Sacsayhuamán y más.
          Cientos de años han pasado y el mundo aún se pregunta cómo logramos tantas maravillas.
          ¿Dónde obtuvimos la energía para realizarlas?
          El secreto está en nuestras raíces, fuertes y sabias.
          Es esta herencia milenaria, la que ahora nos dará
          la energía para seguir logrando lo imposible.</p>
      </section>
      <div className='relative mt-0'>
      <section className='flex flex-col sm:gap-10 max-sm:gap-4 gap-20 items-center justify-center relative h-[446px] max-[769px]:h-[600px] max-[500px]:h-[446px] max-sm:pt-8 max-[500px]:pt-0 max-[500px]:-mt-10 pt-0 pb-[26px]'>
        <img src={unProductoDeSN} alt="unProductoDeSN" width={223} className='max-[500px]:w-[123px] sm:w-[163px]' />
        <p className='text-[#1E59BC] max-[769px]:text-[22px] max-[400px]:text-sm max-sm:text-base text-base font-Skia_normal max-[769px]:max-w-[600px] max-sm:max-w-[310px] max-w-[500px] px-4'>Hecha a base de 2 ingredientes naturales ancestrales, la hoja de <strong className='font-Skia'>Guayusa</strong> y la hoja de <strong className='font-Skia'>Coca</strong>, los cuales han sido usados desde hace miles de años por nuestros antepasados.<br />
          <br />
          Te invitamos a descubrir la raíz de la bebida energizante Guayu,
          un producto que respeta su herencia natural y cultural.
          Conoce sus dos presentaciones:</p>
        <img src={barraAndina3x} width={851} alt="barraAndina3x" className='absolute bottom-8' />
      </section>
      <img src={ramaDerecha} width={131} alt="ramaDerecha" className='absolute right-0 top-[210px] z-20 max-md:hidden' />
      <section className='max-sm:bg-cover bg-no-repeat max-sm:bg-left bg-center max-md:h-[776px] h-80 max-md:gap-8 relative z-10 flex justify-center items-center max-md:flex-col-reverse max-sm:p-4' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: backgroundSize }}>
        <div className='max-md:max-w-[680px] max-w-[463px] flex items-end max-md:flex-row-reverse'>
          <div className='relative left-12 flex items-end max-sm:-ml-[60px] max-md:-ml-[40px]'>
            <img src={bajoEnCalorias} alt="bajoEnCalorias" width={54} className='mb-7 max-sm:w-[48px] max-md:w-[88px]' />
            <img src={sinOctogonos} alt="sinOctogonos" width={66} className='ml-4 mb-8 max-sm:w-[57px] max-md:w-[107px] max-[500px]:ml-0'/>
          </div>
          <img src={botellaGuayuAzul3x} alt="botellaGuayuAzul3x" width={297} className='max-md:hidden'/>
          <img src={botellaGuayuAzul3xV2} alt="botellaGuayuAzul3xV2" className='max-md:max-w-[275px] max-w-[455px] w-full max-md:-ml-[100px] md:hidden max-[321px]:max-w-[245px]'/>
        </div>
        <div className='max-w-[335px] flex flex-col max-md:items-center justify-start max-md:gap-6 gap-3 max-md:ml-0 ml-8'>
          <img src={decoracionAndino} alt="decoracionAndino" width={122} className='max-md:hidden'/>
          <h1 className='font-GratelosDisplay max-sm:text-[61px] max-md:text-[81px] text-5xl max-md:text-nowrap text-white text-start'>GUAYU CLÁSICA</h1>
          <p className='font-Skia_normal text-sm max-[400px]:text-sm max-sm:text-base max-md:text-xl text-white max-md:text-center text-start max-[500px]:w-full max-sm:w-[468px] max-md:w-[568px] w-[280px] leading-tight'>Hecha a base de hoja de Guayusa, potente energético cultivado por comunidades de la Amazonía peruana expertas en el cultivo de esta milenaria hoja, que además brinda una sensación de relajación, elevando la calma<br/> mental y mejora del aprendizaje.</p>
        </div>
      </section>
      <section className='max-sm:bg-cover bg-no-repeat bg-center max-sm:bg-right max-md:h-[776px] h-80 relative z-10 flex justify-center items-center max-md:flex-col max-sm:p-4' style={{backgroundImage: `url(${backgroundImage2})`, backgroundSize: backgroundSize}}>
        <div className='max-w-[355px] flex flex-col max-md:items-center justify-start max-md:gap-6 gap-3 max-md:ml-0 ml-8'>
          <div className='relative'>
            <h1 className='font-GratelosDisplay max-sm:text-[51px] max-md:text-6xl text-5xl max-md:text-wrap text-white max-md:text-center text-start max-md:w-[241px] md:w-[180px]'>GUAYU HOJA DE COCA</h1>
            <img src={decoracionAndino} alt="decoracionAndino" width={105} className='absolute bottom-1.5 left-[130px] max-md:hidden'/>
          </div>
          <p className='font-Skia_normal text-sm max-[400px]:text-sm max-sm:text-base max-md:text-xl text-white max-md:text-center text-start max-[500px]:w-full max-sm:w-[468px] max-md:w-[568px] w-[256px] leading-tight'>
          La hoja de Coca, un ingrediente ancestral, le aporta la potencia a nuestra bebida. <br/>La cuál proviene
          de la ENACO, empresa nacional
          que trabaja con agricultores legales.<br/>
          La hoja de Coca además de estimular, disminuye la sensación de cansancio.</p>
        </div>
        <div className='max-w-[429px] w-full flex justify-start max-sm:justify-center items-end max-md:flex-row-reverse'>
          <img src={botellaGuayuVerde} alt="botellaGuayuVerde" className='relative top-6 max-w-[255px] max-[500px]:max-w-[225px] max-[321px]:max-w-[185px]'/>
          <div className='relative flex items-end max-md:flex-row-reverse'>
            <img src={bajoEnCalorias} alt="bajoEnCalorias" width={58} className='ml-2.5 max-md:mx-4 mb-12 max-sm:w-[48px] max-md:w-[88px] max-[500px]:mr-0 max-[500px]:ml-2.5' />
            <div className='flex flex-col items-center ml-2.5 max-sm:min-w-10'>
              <img src={sinOctogonos} alt="sinOctogonos" width={66} className='mb-6 max-sm:w-[57px] max-md:w-[107px]'/>
              <img src={hojaDeCocaLegal} alt="hojaDeCocaLegal" width={50} className='mb-12 max-sm:w-[57px] max-md:w-[107px]'/>
            </div>
          </div>
        </div>
      </section>
      <img src={ramaIzquierda} width={131} alt="ramaIzquierda" className='absolute left-0 top-[920px] z-20 max-lg:w-24 max-lg:top-[990px] max-md:hidden' />
      <section className='h-[340px] bg-no-repeat bg-center max-lg:mx-2.5 relative z-0 flex flex-col items-center justify-center gap-7' style={{backgroundImage: `url(${bgWhiteLineas})`, backgroundSize: "874px 320px"}}>
        <p className='w-[459px] max-sm:w-[310px] text-[#1E59BC] max-[321px]:w-[230px] max-[241px]:text-3xl max-sm:text-4xl text-[54px] font-GratelosDisplay leading-[.9]'>TOMA LA QUE MÁS TE GUSTE
          Y CÁRGATE CON LA ENERGÍA DE
          NUESTRAS RAÍCES MILENARIAS</p>
        <a href='https://santanatura.com.pe/product-category/guayu/' target='_blank' className='enlaceGuayu bg-[#1E59BC] text-white pt-2 pb-2.5 px-[52px] max-sm:text-xl text-2xl font-GratelosDisplay leading-none transition-colors hover:bg-[#163D8A] hover:text-white'>PÍDELAS AQUÍ</a>
      </section>
      </div>
      <section className='max-sm:h-[669px] h-[359px] bg-no-repeat bg-center relative z-0 flex flex-col items-center justify-center gap-7' style={{backgroundImage: `url(${backgroundSizeRio})`, backgroundSize: "876px"}}>
        <img src={carbonNeutral} alt="carbonNeutral" width={104} className='max-sm:w-[250px] max-[500px]:w-[170px]' />
        <p className='max-sm:w-[310px] w-[410px] text-white font-Skia_normal max-[400px]:text-sm max-sm:text-base text-sm leading-tight'>Guayu es desarrollada dentro de los estándares internacionales que protegen el medio ambiente. Contamos con el sello Carbono Neutral que acredita la reducción de emisión de gases de efecto invernadero a la atmósfera.<br/><br/>
        Este certificado nos impulsa a seguir trabajando de manera responsable, generando nuevas capacidades internas, así como procesos operativos climáticamente inteligentes aportando así
        a la educación ambiental en el país.</p>
      </section>
      <section className='h-[202px] bg-no-repeat bg-left relative z-0 lg:my-2.5 max-lg:m-2.5 flex flex-col items-center justify-center gap-4' style={{backgroundImage: `url(${bgRedesSociales})`, backgroundSize: "876px"}}>
        <p className='max-[500px]:text-2xl max-sm:text-3xl text-2xl text-[#1E59BC] font-GratelosDisplay w-[303px] leading-none'>SÍGUENOS EN NUESTRAS REDES Y COMPARTE TU ENERGÍA CON NOSOTROS.</p>
        <div className='flex gap-4'>
          <a href="https://www.facebook.com/profile.php?id=61558224470977" target='_blank'><img src={iconFacebook} alt="iconFacebook" width={30} /></a>
          <a href="https://www.instagram.com/guayuenergydrink/" target='_blank'><img src={iconInstagram} alt="iconInstagram" width={30} /></a>
        </div>
      </section>
    </>
  )
}

export default App
