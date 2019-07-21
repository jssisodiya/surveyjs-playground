import "./styles.css";
import * as lodash from "lodash";
import * as Survey from "survey-jquery";
import jQuery from "jquery";

var surveyJSON = {
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "question1",
          choices: ["item1", "item2", "item3"]
        },
        {
          type: "checkbox",
          name: "question2",
          visibleIf: '{question1} = "item2"',
          choices: ["item1", "item2", "item3"]
        }
      ]
    }
  ]
};
var survey = new Survey.Model(surveyJSON);

jQuery("#surveyContainer").Survey({
  model: survey
});
