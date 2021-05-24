import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {questions} from "./data/questions";
import {
  Grid, makeStyles,
  Paper,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import {BarGraph} from "./BarGraph";

type Answer = 'DD' | 'SD' | 'SA' | 'DA'

interface SelectedValues {
  [typename: string]: Answer[]
}

interface QuestionProp {
  type: string;
  id: number;
  question: string;
  selectedValues: SelectedValues;
  handleChange: (a: string, b: number, c: Answer) => void;
}

function App() {
  const [calculatedResult, setCalculatedResult] = useState<any[]>([]);
  const params = new URLSearchParams(window.location.search);

  function getOrDefault(data: string | null, def: SelectedValues): SelectedValues {
    if (data == null) return def;
    else return JSON.parse(atob(data)) as SelectedValues;
  }

  const [selectedValues, setSelectedValues] = useState<SelectedValues>(getOrDefault(
    params.get("data"),
    {
      "external": ['DD', 'DD', 'DA', 'DA', 'DD', 'DA', 'DD', 'DA', 'DA', 'DD'],
      "internal": ['DD', 'DD', 'DA', 'DA', 'DD', 'DA', 'DD', 'DA', 'DA', 'DD'],
      "deeper": ['DD', 'DD', 'DA', 'DA', 'DD', 'DA', 'DD', 'DA', 'DA', 'DD'],
      "spiritual": ['DD', 'DD', 'DA', 'DA', 'DD', 'DA', 'DD', 'DA', 'DA', 'DD']
    }));
  const [externalScore, setExternalScore] = useState(0);
  const [internalScore, setInternalScore] = useState(0);
  const [deeperScore, setDeeperScore] = useState(0);
  const [spiritualScore, setSpiritualScore] = useState(0);

  function handleChange(type: string, id: number, answer: Answer) {
    selectedValues[type][id - 1] = answer;
    setSelectedValues(selectedValues);

    const code = Buffer.from(JSON.stringify(selectedValues)).toString('base64');
    const value = encodeURI(code);

    window.history.replaceState("", "", `/?data=${value}`);

    calcScore();
  }

  const calcLineScore = useCallback((answers: Answer[]) => {
    const inverse = new Set([3, 4, 6, 8, 9]);

    const scoreMap = {
      'DD': 0,
      'SD': 1,
      'SA': 2,
      'DA': 3,
    }

    const inverseScoreMap = {
      'DD': 3,
      'SD': 2,
      'SA': 1,
      'DA': 0,
    }

    return answers.map((answer, idx) => {
      if (inverse.has(idx + 1)) {
        return inverseScoreMap[answer];
      } else {
        return scoreMap[answer];
      }
    }).reduce((acc, elem) => acc + elem)
  }, []);

  const calcScore = useCallback(() => {
    setExternalScore(calcLineScore(selectedValues["external"]))
    setInternalScore(calcLineScore(selectedValues["internal"]))
    setDeeperScore(calcLineScore(selectedValues["deeper"]))
    setSpiritualScore(calcLineScore(selectedValues["spiritual"]))

    setCalculatedResult([
      {
        "argument": "외적인삶",
        "value": externalScore
      },
      {
        "argument": "내적인삶",
        "value": internalScore
      },
      {
        "argument": "심층적삶",
        "value": deeperScore,
      },
      {
        "argument": "영적인삶",
        "value": spiritualScore
      }
    ])
  }, [calcLineScore, deeperScore, externalScore, internalScore, spiritualScore, selectedValues])

  useEffect(() => {
    calcScore();
  }, [calcScore]);

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <h1>설명</h1>
          <p>이 설문은 "내 그림자에게 말걸기" 라는 책에서 발췌했습니다. 각 문항에는 DD, SD, SA, DA로 답이 구분되어 있습니다. 문항을 읽고 해당하는 항목을 클릭해주시면 됩니다.</p>
          <p>해당 항목을 클릭하면 본 페이지의 맨 아래의 그래프에 반영되어 수치를 볼 수 있습니다.</p>
          <p>저장기능은 지원되지 않으나, 답을 클릭하면 현재 페이지의 웹주소에 반영됩니다. 다음에 와서 다시 작성하고자 한다면 브라우저상의 주소를 복사하여 붙여두시면 답안을 기입한 곳 부터 다시 입력할 수 있습니다.</p>
        </Grid>
        <Grid item xs={4}/>
        <Grid item xs={4}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>척도</TableCell>
                  <TableCell>의미</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>DD</TableCell>
                  <TableCell>전혀 아니다</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>SD</TableCell>
                  <TableCell>안그런 편이다</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>SA</TableCell>
                  <TableCell>그런 편이다</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>DA</TableCell>
                  <TableCell>확실히 그렇다</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
      <h1>외적인 삶: {externalScore}</h1>
      {questions.external.map(({id, question}) =>
        <Question type={"external"}
                  id={id}
                  question={question}
                  selectedValues={selectedValues}
                  handleChange={handleChange}/>)}
      <h1>내적인 삶: {internalScore}</h1>
      {questions.internal.map(({id, question}) =>
        <Question type={"internal"}
                  id={id}
                  question={question}
                  selectedValues={selectedValues}
                  handleChange={handleChange}/>)}
      <h1>심층적 삶: {deeperScore}</h1>
      {questions.deeper.map(({id, question}) =>
        <Question type={"deeper"}
                  id={id}
                  question={question}
                  selectedValues={selectedValues}
                  handleChange={handleChange}/>)}
      <h1>영적인 삶: {spiritualScore}</h1>
      {questions.spiritual.map(({id, question}) =>
        <Question type={"spiritual"}
                  id={id}
                  question={question}
                  selectedValues={selectedValues}
                  handleChange={handleChange}/>)}
      <Grid container>
        <Grid item xs={12}>
          <BarGraph data={calculatedResult}/>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    "margin-left": "20px",
    "margin-right": "20px"
  }
});

const Question = ({type, id, question, selectedValues, handleChange}: QuestionProp) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <hr/>
      <Grid item xs={12}>
        {question}
      </Grid>
      <Grid item xs={12}>
        {(['DD', 'SD', 'SA', 'DA'] as Answer[]).map(answer => <>
          {answer}
          <Radio
            checked={selectedValues[type][id - 1] === answer}
            onChange={() => handleChange(type, id, answer)}
            value={answer}
            name={`question-button-${type}-${id}`}
            inputProps={{'aria-label': answer}}/></>)}
      </Grid>
    </Paper>
  );
}

export default App;