let option;

while(option != 2){
     option = Number(prompt(`
    Iremos Fazer um teste de quanto Você ama seu Namorado:

    1- Escolha essa opção e informe o quanto você ama seu namorado: 
    2- Sair, mas não saia sem fazer o teste =)`))

    switch(option){
        case 1:
           let amor = Number(prompt(`
            Digite um valor de 0 a 10 de quanto você ama seu namorado.
            Ps: Valores maiores que 10 serão aceitos`))   
            if(amor < 10){
                alert(`
            Nossa que amor Baixo =/, 
            Seu namorado não aceita esse valor e fica muito triste com voce 
                                   =/ `)
            } else if(amor = 10 ){
                alert(`
            Até que você ama seu namorado
            mas... ele te Ama muito mais S2 `)

            } else if( amor > 10){
                alert(`Boa tentativa mas eu te Amo muito mais S2...`)
            }
            break;
        case 2:
            alert("Até mais , eu Te  Amooo S2")
            break;

        default:
            alert('opção invalida, tente novamente ')   


    }
}


