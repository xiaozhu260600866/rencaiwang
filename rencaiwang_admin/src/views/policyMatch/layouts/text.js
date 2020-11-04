export default {
   data:{
      questions:[
        {label:'问题1(一层)',value:'question_1',children:[
           {label:'问题1-答案1',value:'answer1_1',children:[
               {label:'问题1-2(二层)',value:'question1_2',children:[
                  {label:'问题1-21-答案1',value:'answer1_2_1',children:[
                      {label:'问题1-2(三层)',value:'question1_3',children:[
                        {label:'问题1-21-答案2',value:'answer1_2_2'},
                        {label:'问题1-21-答案3',value:'answer1_2_3'},
                        {label:'问题1-21-答案4',value:'answer1_2_4'},
                      ]}
                    
                  ]},
                  {label:'问题1-21-答案2',value:'answer1_2_2'},
                  {label:'问题1-21-答案3',value:'answer1_2_3'},
                  {label:'问题1-21-答案4',value:'answer1_2_4'},
               ]},
           ]},
           {label:'问题1-答案2',value:'answer1_2'},
           {label:'问题1-答案3',value:'answer1_3'},
           {label:'问题1-答案4',value:'answer1_4'},

        ]},
        {label:'问题2',value:'question_2',children:[
            {label:'问题2-答案1',value:'answer2_1'},
            {label:'问题2-答案2',value:'answer2_2'},
            {label:'问题2-答案3',value:'answer2_3'},
            {label:'问题2-答案4',value:'answer2_4'},

        ]},
        {label:'问题3',value:'question_3',children:[
          {label:'问题3-答案1',value:'answer3_1'},
          {label:'问题3-答案2',value:'answer3_2'},
          {label:'问题3-答案3',value:'answer3_3'},
          {label:'问题3-答案4',value:'answer3_4'},
        ]},
      ]

   }


}
