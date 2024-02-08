import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';


function App() {
  const katakana = [
    { romanji: 'a', katakana: 'ア' },
    { romanji: 'i', katakana: 'イ' },
    { romanji: 'u', katakana: 'ウ' },
    { romanji: 'e', katakana: 'エ' },
    { romanji: 'o', katakana: 'オ' },
    { romanji: 'ka', katakana: 'カ' },
    { romanji: 'ki', katakana: 'キ' },
    { romanji: 'ku', katakana: 'ク' },
    { romanji: 'ke', katakana: 'ケ' },
    { romanji: 'ko', katakana: 'コ' },
    { romanji: 'sa', katakana: 'サ' },
    { romanji: 'shi', katakana: 'シ' },
    { romanji: 'su', katakana: 'ス' },
    { romanji: 'se', katakana: 'セ' },
    { romanji: 'so', katakana: 'ソ' },
    { romanji: 'ta', katakana: 'タ' },
    { romanji: 'chi', katakana: 'チ' },
    { romanji: 'tsu', katakana: 'ツ' },
    { romanji: 'te', katakana: 'テ' },
    { romanji: 'to', katakana: 'ト' },
    { romanji: 'na', katakana: 'ナ' },
    { romanji: 'ni', katakana: 'ニ' },
    { romanji: 'nu', katakana: 'ヌ' },
    { romanji: 'ne', katakana: 'ネ' },
    { romanji: 'no', katakana: 'ノ' },
    { romanji: 'ha', katakana: 'ハ' },
    { romanji: 'hi', katakana: 'ヒ' },
    { romanji: 'fu', katakana: 'フ' },
    { romanji: 'he', katakana: 'ヘ' },
    { romanji: 'ho', katakana: 'ホ' },
    { romanji: 'ma', katakana: 'マ' },
    { romanji: 'mi', katakana: 'ミ' },
    { romanji: 'mu', katakana: 'ム' },
    { romanji: 'me', katakana: 'メ' },
    { romanji: 'mo', katakana: 'モ' },
    { romanji: 'ya', katakana: 'ヤ' },
    { romanji: 'yu', katakana: 'ユ' },
    { romanji: 'yo', katakana: 'ヨ' },
    { romanji: 'ra', katakana: 'ラ' },
    { romanji: 'ri', katakana: 'リ' },
    { romanji: 'ru', katakana: 'ル' },
    { romanji: 're', katakana: 'レ' },
    { romanji: 'ro', katakana: 'ロ' },
    { romanji: 'wa', katakana: 'ワ' },
    { romanji: 'wo', katakana: 'ヲ' },
    { romanji: 'n', katakana: 'ン' },
    { romanji: 'ga', katakana: 'ガ' },
    { romanji: 'gi', katakana: 'ギ' },
    { romanji: 'gu', katakana: 'グ' },
    { romanji: 'ge', katakana: 'ゲ' },
    { romanji: 'go', katakana: 'ゴ' },
    { romanji: 'za', katakana: 'ザ' },
    { romanji: 'ji', katakana: 'ジ' },
    { romanji: 'zu', katakana: 'ズ' },
    { romanji: 'ze', katakana: 'ゼ' },
    { romanji: 'zo', katakana: 'ゾ' },
    { romanji: 'da', katakana: 'ダ' },
    { romanji: 'ji', katakana: 'ヂ' },
    { romanji: 'zu', katakana: 'ヅ' },
    { romanji: 'de', katakana: 'デ' },
    { romanji: 'do', katakana: 'ド' },
    { romanji: 'ba', katakana: 'バ' },
    { romanji: 'bi', katakana: 'ビ' },
    { romanji: 'bu', katakana: 'ブ' },
    { romanji: 'be', katakana: 'ベ' },
    { romanji: 'bo', katakana: 'ボ' },
    { romanji: 'pa', katakana: 'パ' },
    { romanji: 'pi', katakana: 'ピ' },
    { romanji: 'pu', katakana: 'プ' },
    { romanji: 'pe', katakana: 'ペ' },
    { romanji: 'po', katakana: 'ポ' },
    { romanji: 'kya', katakana: 'キャ' },
    { romanji: 'kyu', katakana: 'キュ' },
    { romanji: 'kyo', katakana: 'キョ' },
    { romanji: 'sha', katakana: 'シャ' },
    { romanji: 'shu', katakana: 'シュ' },
    { romanji: 'sho', katakana: 'ショ' },
    { romanji: 'ja', katakana: 'ジャ' },
    { romanji: 'ju', katakana: 'ジュ' },
    { romanji: 'jo', katakana: 'ジョ' },
  ];

  const [input, setInput] = useState('');
  const [current, setCurrent] = useState(0);

  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const [error, setError] = useState(false);

  const setFirstKatakana = () => {
    setCurrent(0);
  }

  const handleNextClick = () => {
    if(current == 0){
		setCurrent(1)
	}
	else if(current === katakana.length - 1){
		setCurrent(0)
	}
    else{
		setCurrent(current + 1)
	}
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if(input.toLowerCase() === katakana[current].romanji){
      setStreak(streak + 1)
      setMaxStreak(Math.max(streak + 1,maxStreak))
      setError(false)

      localStorage.setItem('maxStreak', Math.max(streak, maxStreak));
      localStorage.setItem('streak', streak + 1);
    } else {
      setStreak(0);
      setError(`Close! The correct answer for ${katakana[current].katakana} is ${katakana[current].romanji}`);
    
      localStorage.setItem('streak', 0);
    }

    setInput('')
    setRandomKatakana()
  }

  useEffect(() => {
    setFirstKatakana()
    setStreak(parseInt(localStorage.getItem('streak')) || 0)
    setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0)
  }, [])

  return (
    <div className="min-h-screen bg-slate-800 text-white text-center">
      <header className="p-6 mb-8">
      <Link to="/learnHiragana" className="px-5 text-blue-300 hover:underline">
          Learn Hiragana
        </Link>
	  <Link to="/" className=" px-5 text-blue-300 hover:underline">
          Hiragana Quiz
        </Link>
	  <Link to="/LearnKatakana" className=" px-5 text-blue-300 hover:underline">
          Learn Katakana
        </Link>
	  <Link to="/katakana" className="px-5 text-blue-300 hover:underline">
          Katakana Quiz
        </Link>
        <h1 className='text-2xl font-bold uppercase'>Learn Katakana</h1>
        
	  </header>

	  <div className="text-9xl font-bold mb-8">
		{ katakana[current].katakana }
	  </div>
	  <div className="text-9xl font-bold mb-8">
		{ katakana[current].romanji }
	  </div>


      <div className="mb-16 mt-16">
        <button
          onClick={handleNextClick}
          className="px-5 py-2 bg-blue-500 rounded-md text-white"
        >
          Next
        </button>
      </div>

	</div>
    
  )
}

export default App;