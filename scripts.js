let students = [
  {
    name: "Paulo",
    gender: "Masculino",
    score1: 9.1,
    score2: 7.3,
  },
  {
    name: "Angela",
    gender: "Feminino",
    score1: 5.9,
    score2: 7.2,
  },
  {
    name: "João",
    gender: "Masculino",
    score1: 4.8,
    score2: 6.4,
  },
  {
    name: "Maria",
    gender: "Feminino",
    score1: 7.4,
    score2: 6.6,
  },
  {
    name: "Muriel",
    gender: "",
    score1: 5.1,
    score2: 8.6,
  },
]

function averageScoreCalc(score1,score2){
  let averageScore = ((score1 + score2) / 2).toFixed(1)
  return averageScore
}

for(let student of students){
  switch(student.gender){
    case "Masculino":
      if (averageScoreCalc(student.score1, student.score2) >= 7){
        alert(`A média do aluno ${student.name} é: ${averageScoreCalc(student.score1, student.score2)}
        Parabéns, ${student.name}! Você foi aprovado no concurso!`)
    
      }else{
        alert(`A média do aluno ${student.name} é: ${averageScoreCalc(student.score1, student.score2)}
        Não foi dessa vez, ${student.name}! Tente novamente!`)
      }
    break
    case "Feminino":
      if (averageScoreCalc(student.score1, student.score2) >= 7){
        alert(`A média da aluna ${student.name} é: ${averageScoreCalc(student.score1, student.score2)}
        Parabéns, ${student.name}! Você foi aprovada no concurso!`)
    
      }else{
        alert(`A média da aluna ${student.name} é: ${averageScoreCalc(student.score1, student.score2)}
        Não foi dessa vez, ${student.name}! Tente novamente!`)
      }
    break   
    default:
      if (averageScoreCalc(student.score1, student.score2) >= 7){
        alert(`A média do(a) aluno(a) ${student.name} é: ${averageScoreCalc(student.score1, student.score2)}
        Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
    
      }else{
        alert(`A média do(a) aluno(a) ${student.name} é: ${averageScoreCalc(student.score1, student.score2)}
        Não foi dessa vez, ${student.name}! Tente novamente!`)
      }
    break  
  }
}