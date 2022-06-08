import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'translator';
  english_words=['Criteria','Sub-Criteria','Score','Minimum Score','Operator','Value ','Condition','Add','Save','Internal Credit Score Maintenance','Maximum Score','Credit Score Internal','Proof Of Income','IT return','Salary Slip','Letter Head','No Proof','Marketability of Property','Very Good','Good','Fair','Poor','Loan Purpose','Auto Loan','Loan Against Securities','Home Loan','New vehicle','Working Capital','Construction','Employer Type','Salaried','Govt/Public sector','MNC','Listed Private sector','Unlisted private companies','Designation','Senior Management','Middle Management','Self Employed','Pensioner','Junior','Educational Qualification','Higher Secondary','Diploma','Graduate','Doctorate / Post Graduate','Others','Borrowers Age','Age','Guarantors Networth to Loan ratio','Debt to Income ratio','Loan to Value ratio	','Networth to Loan ratio','Number of Co- applicants','Annual Income']
  french_words=['Critère','Sous-Critères','Score','Score Minimum','Opérateur','Valeur','Condition','Ajouter','Enregistrer','Gestion du Score Interne de Crédit ','Score Maximum','Score Interne de Crédit','Preuve de Revenu',"Retour à l'IT'",'Fiche de Paie','Lettre En-tête','Aucune Preuve','Valeur de la Propriété','Très Bien','Bien','Moyen','Pauvres','Objet du Prêt','Crédit Voiture','Prêt Contre Titres','Crédit Maison','Nouveau Véhicule','Fonds de Roulement','Construction',"'Type d'Employeur'",'Salarié','Gouvernement/Secteur Public','Multinationale','Listé au Niveau du Secteur Privé ','Sociétés Privées non Listé','Désignation','Cadre Supérieur','Cadres Moyen','Travailleur Indépendant','Retraité','Junior','Niveau Scolaire / Diplôme','Secondaire','Diplômée','Diplômée','Doctorat / Post-diplôme','Autres','Âge des emprunteurs','Âge','Ratio Net des Garants/Prêts','"Ratio Dette/Revenu	"','"Ratio Prêt/Valeur	"','Ratio Valeur Nette/Prêt','Nombre de Co-Demandeurs','Revenu annuel']
  assume_json_input=['Sub-Criteria','Graduate','Networth to Loan ratio'];
  json_output=[''];
  num1:number=0;

//test code for agent
  agent_active_arr=[true,false,true]
  constructor(){
    
  }
  ngOnInit(): void {
      {
        // logic for searching the input json word and assigning the french transformation
        for(let i=0;i<this.assume_json_input.length;i++){
          for(let j=0;j<this.english_words.length;j++){
if(this.assume_json_input[i]===this.english_words[j]){
  this.json_output.push(this.french_words[j])
  break;
  
}
          }
        }
        this.num1+=1;
        console.log(this.num1)
//first element is empty since we use push, it is removed by the shift method
        this.json_output.shift();

      }
  }
  
}
