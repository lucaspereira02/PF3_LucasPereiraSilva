function  calcular ( ) {
    const  nome = documento.getElementById ('Nome').valor
    const  mensal = Number ( document.getElementById ( 'ValorMensal').value)
    const  tjuros = Number ( document.getElementById ( 'Juros') . value )
    const  meses = Number ( document.getElementById ('Parcelas') . value )

    const  Juros  =  tjuros/100

    var  res  =  documento . getElementById ( "resultado" )




    deixe (p) = (mensal*((1 + Juros)** meses - 1) / Juros ).toFixed(2)

        res . innerHTML  =<b>$ {nome}</b>,se você aplicar<b> R$ {mensal} </b>,
        à taxa de juros de <b> $ {tjuros} % <b> ao mês,
        durante <b> $ { meses } </b> meses,
        acumulará uma poupança de <b> R $ {p} </b> 

}