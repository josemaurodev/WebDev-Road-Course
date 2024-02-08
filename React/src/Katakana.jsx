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

  const [streakKatakana, setStreakKatakana] = useState(0);
  const [maxStreakKatakana, setMaxStreakKatakana] = useState(0);

  const [error, setError] = useState(false);

  const setRandomKatakana = () => {
    const randomIndex = Math.floor(Math.random()*katakana.length);
    setCurrent(randomIndex);
  }

  const handleChange = (evt) => {
    setInput (evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if(input.toLowerCase() === katakana[current].romanji){
      setStreakKatakana(streakKatakana + 1)
      setMaxStreakKatakana(Math.max(streakKatakana + 1,maxStreakKatakana))
      setError(false)

      localStorage.setItem('maxStreakKatakana', Math.max(streakKatakana, maxStreakKatakana));
      localStorage.setItem('streakKatakana', streakKatakana + 1);
    } else {
      setStreakKatakana(0);
      setError(`Close! The correct answer for ${katakana[current].katakana} is ${katakana[current].romanji}`);
    
      localStorage.setItem('streakKatakana', 0);
    }

    setInput('')
    setRandomKatakana()
  }

  useEffect(() => {
    setRandomKatakana();
    const storedStreak = parseInt(localStorage.getItem('streakKatakana')) || 0;
    const storedMaxStreak = parseInt(localStorage.getItem('maxStreakKatakana')) || 0;
  
    setStreakKatakana(storedStreak);
    setMaxStreakKatakana(storedMaxStreak);
  
    console.log('Streak and Max Streak effect triggered');
  }, []);
  

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
		    <h1 className='text-2xl font-bold uppercase'>Katakana Quiz</h1>
		    <div>
			  <p>{streakKatakana}/{maxStreakKatakana}</p>
		</div>
        
	  </header>

	  <div className="text-9xl font-bold mb-8">
		{ katakana[current].katakana }
	  </div>

	  	<div className="mb-8">
			<form onSubmit={handleSubmit}>
				<input type="text"
					value={input}
					onChange={handleChange}
					className="block w-24 mx-auto pb-2 bg-transparent border-b-2 border-b-white outline-none
					text-center text-6xl" />
			</form>
		</div>
		{error && <p className="text-red-500 text-center">{error}</p>}
	</div>
    
  )
}

export default App;