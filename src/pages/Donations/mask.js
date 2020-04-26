export const cpfMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }


  export const dataMask = value => {
    return value
      .replace(/\D/g, '') 
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})\d+?$/, '$1')  
      
  }


  export const validadeMask = value => {
    return value
      .replace(/\D/g, '') 
      .replace(/(\d{2})(\d)/, '$1/$2') 
      .replace(/(\d{4})\d+?$/, '$1') 
  }

  
  export const intMask = value => {
    return value.replace(/\D/g, '')  
      
  }

    
  export const cepMask = value => {
    return value
            .replace(/\D/g, '') 
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')   
      
  }

  export const cardMask = value => {
      
    return value
      .replace(/\D/g, '')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1')
  }