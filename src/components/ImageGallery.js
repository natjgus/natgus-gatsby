import React from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery';



export class Gallery extends React.Component {

  render() {

    const images = [
      {
        original: 'https://lh3.googleusercontent.com/NvCWHYPClvWQKufceEDWKO4Qb1v31vodifLji7JvDdfWy8QCb6PIMprRh_UGU82Ax95vk2NTmePjXMeIIWPXeFggljbZqC9_zyEEVP1pmIffBdXOEQB_ZQG01P19MRUyeX7bKP9tzLM=w2400',
        thumbnail: 'https://lh3.googleusercontent.com/NvCWHYPClvWQKufceEDWKO4Qb1v31vodifLji7JvDdfWy8QCb6PIMprRh_UGU82Ax95vk2NTmePjXMeIIWPXeFggljbZqC9_zyEEVP1pmIffBdXOEQB_ZQG01P19MRUyeX7bKP9tzLM=w2400',
      },
      {
        original: 'https://lh3.googleusercontent.com/X4Cpm69J5j_kJh2CPI9IC_P3a-8pntoHNJIvlWT-pjq9wfPoxjmicSnDauNYwdzp0vjyf7ECuaZLZDtvbL95ccZKy3MZ9CN58GlcmBpVF76JkaG6BR8eL7yaz2DYcVGlbXHc8zaXXeM=w2400',
        thumbnail: 'https://lh3.googleusercontent.com/X4Cpm69J5j_kJh2CPI9IC_P3a-8pntoHNJIvlWT-pjq9wfPoxjmicSnDauNYwdzp0vjyf7ECuaZLZDtvbL95ccZKy3MZ9CN58GlcmBpVF76JkaG6BR8eL7yaz2DYcVGlbXHc8zaXXeM=w2400'
      },
      {
        original: 'https://lh3.googleusercontent.com/TmUd-gGvnIPRrgP45jDr2A8ld7PkJ5fCYig71Ii2DnBe3yxwquXwu_6R6NSchnTcOo_qyuOMFcMR0IrYnY8PwUSXPTwvSnej_WKdqMTRgCwsG7xmGA7MVWChp6J45uQB7bdl9zjdXk4=w2400',
        thumbnail: 'https://lh3.googleusercontent.com/TmUd-gGvnIPRrgP45jDr2A8ld7PkJ5fCYig71Ii2DnBe3yxwquXwu_6R6NSchnTcOo_qyuOMFcMR0IrYnY8PwUSXPTwvSnej_WKdqMTRgCwsG7xmGA7MVWChp6J45uQB7bdl9zjdXk4=w2400'
      },
      {
        original: 'https://lh3.googleusercontent.com/JsicMlz2Myi_xqw6Lw-Owi41LNVOijzAaH4G6fNo3sJn4LoNfziCQsVuDEacFYzr376HcAWwuENJSj4lC_MBTILae6zv8Al-Ek3JGzxkmx6yUkM6K_7NzZV1dqpzN9vUVW_QAuhBLds=w2400',
        thumbnail: 'https://lh3.googleusercontent.com/JsicMlz2Myi_xqw6Lw-Owi41LNVOijzAaH4G6fNo3sJn4LoNfziCQsVuDEacFYzr376HcAWwuENJSj4lC_MBTILae6zv8Al-Ek3JGzxkmx6yUkM6K_7NzZV1dqpzN9vUVW_QAuhBLds=w2400'
      },
      {
        original: 'https://lh3.googleusercontent.com/IrtltXJXjp38zjblWwnU8CPPfp6J-Ruwbxe1mym_mJqyZdEq_OVE1jw7qDym9NVSxtrvYrPImAYNQ3anBSD-HyTUk6F4IsSSLkKTYiuBtL-ea45va8KeZBaulvzjxrfiXzDSYLjnWeU=w2400',
        thumbnail: 'https://lh3.googleusercontent.com/IrtltXJXjp38zjblWwnU8CPPfp6J-Ruwbxe1mym_mJqyZdEq_OVE1jw7qDym9NVSxtrvYrPImAYNQ3anBSD-HyTUk6F4IsSSLkKTYiuBtL-ea45va8KeZBaulvzjxrfiXzDSYLjnWeU=w2400'
      },
      {
        original: 'https://lh3.googleusercontent.com/v7-eKFqEN82P3UN35lxaAXsJqxVo2lh_jl6VIC1Ug3-eqtUglwP2SgGvitVS_bxSXybeUKbS3u86cWigCRbPlNZbLjSYpYmfX7w_uzxrwalCaRMuXQ2kkEc3oXipVKKrd7w8qaCw8hE=w2400',
        thumbnail: 'https://lh3.googleusercontent.com/v7-eKFqEN82P3UN35lxaAXsJqxVo2lh_jl6VIC1Ug3-eqtUglwP2SgGvitVS_bxSXybeUKbS3u86cWigCRbPlNZbLjSYpYmfX7w_uzxrwalCaRMuXQ2kkEc3oXipVKKrd7w8qaCw8hE=w2400'
      },
      {
        original: 'https://lh3.googleusercontent.com/U-yLAe19y-lXjc7MyDmUAd5C4TRxn6oPLOYziCOTi4garXncDLMjiYfxx_HGuD0w_0s1lUsiuOhBbjsmWtp-T8obLpQkaTFdU5PhajzkikQHCLhYz1Vfag1APlfcvJsesywGFV-C0I4=w2400',
        thumbnail: 'https://lh3.googleusercontent.com/U-yLAe19y-lXjc7MyDmUAd5C4TRxn6oPLOYziCOTi4garXncDLMjiYfxx_HGuD0w_0s1lUsiuOhBbjsmWtp-T8obLpQkaTFdU5PhajzkikQHCLhYz1Vfag1APlfcvJsesywGFV-C0I4=w2400'
      },
      {
        original: 'https://lh3.googleusercontent.com/PHI2CtdE3UGd_kZdvmkZ3mMX0gPotdQCbpd6Os3G53MQrppRbs6pGIguxNE_vWg0ImgMJ4lQzB3Au5uRwidinnbfCDjOzMB3LQx4UXoLn9a-bz9avHIFQ22SEdRMdlYAkHQToaQoFYo=w2400',
        thumbnail: 'https://lh3.googleusercontent.com/PHI2CtdE3UGd_kZdvmkZ3mMX0gPotdQCbpd6Os3G53MQrppRbs6pGIguxNE_vWg0ImgMJ4lQzB3Au5uRwidinnbfCDjOzMB3LQx4UXoLn9a-bz9avHIFQ22SEdRMdlYAkHQToaQoFYo=w2400'
      },
      {
          original: 'https://lh3.googleusercontent.com/wJ6TtC7lUdNfnFPK2v2J-AT2AaTq2tZUQk8CsD-_pZ4uzAQgoSNyEdimBSUMTj-HMl171tWMXKV8i_oGfelPwtHCZN556-ZNkDlLiZqLBEc8yCw59e81lMOy9WL7W5vpLzMIrMvRq2c=w2400',
          thumbnail: 'https://lh3.googleusercontent.com/wJ6TtC7lUdNfnFPK2v2J-AT2AaTq2tZUQk8CsD-_pZ4uzAQgoSNyEdimBSUMTj-HMl171tWMXKV8i_oGfelPwtHCZN556-ZNkDlLiZqLBEc8yCw59e81lMOy9WL7W5vpLzMIrMvRq2c=w2400'
      }
    ]

    return (
      <ImageGallery 
        items={images} 
        autoPlay= {false}
        showPlayButton={false}
      />
    );
  }

}

export default Gallery;