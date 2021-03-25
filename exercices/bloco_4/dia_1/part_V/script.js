let personStatus = 'lista'

switch (personStatus) {
  case 'aprovado':
    console.log('Aprovado(a)!')
    break
  case 'lista':
    console.log('Você esta na lista de espera.')
    break
  case 'reprovado':
    console.log('Reprovado(a).')
    break
  default:
    console.log('Não se aplica')
}