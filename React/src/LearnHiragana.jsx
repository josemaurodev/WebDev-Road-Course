import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';


function App() {
  const hiragana = [
    	{ romanji: 'a', hiragana: 'あ'},
    	{ romanji: 'i', hiragana: 'い' },
		{ romanji: 'u', hiragana: 'う' },
		{ romanji: 'e', hiragana: 'え' },
		{ romanji: 'o', hiragana: 'お' },
		{ romanji: 'ka', hiragana: 'か' },
		{ romanji: 'ki', hiragana: 'き' },
		{ romanji: 'ku', hiragana: 'く' },
		{ romanji: 'ke', hiragana: 'け' },
		{ romanji: 'ko', hiragana: 'こ' },
		{ romanji: 'sa', hiragana: 'さ' },
		{ romanji: 'shi', hiragana: 'し' },
		{ romanji: 'su', hiragana: 'す' },
		{ romanji: 'se', hiragana: 'せ' },
		{ romanji: 'so', hiragana: 'そ' },
		{ romanji: 'ta', hiragana: 'た' },
		{ romanji: 'chi', hiragana: 'ち' },
		{ romanji: 'tsu', hiragana: 'つ' },
		{ romanji: 'te', hiragana: 'て' },
		{ romanji: 'to', hiragana: 'と' },
		{ romanji: 'na', hiragana: 'な' },
		{ romanji: 'ni', hiragana: 'に' },
		{ romanji: 'nu', hiragana: 'ぬ' },
		{ romanji: 'ne', hiragana: 'ね' },
		{ romanji: 'no', hiragana: 'の' },
		{ romanji: 'ha', hiragana: 'は' },
		{ romanji: 'hi', hiragana: 'ひ' },
		{ romanji: 'fu', hiragana: 'ふ' },
		{ romanji: 'he', hiragana: 'へ' },
		{ romanji: 'ho', hiragana: 'ほ' },
		{ romanji: 'ma', hiragana: 'ま' },
		{ romanji: 'mi', hiragana: 'み' },
		{ romanji: 'mu', hiragana: 'む' },
		{ romanji: 'me', hiragana: 'め' },
		{ romanji: 'mo', hiragana: 'も' },
		{ romanji: 'ya', hiragana: 'や' },
		{ romanji: 'yu', hiragana: 'ゆ' },
		{ romanji: 'yo', hiragana: 'よ' },
		{ romanji: 'ra', hiragana: 'ら' },
		{ romanji: 'ri', hiragana: 'り' },
		{ romanji: 'ru', hiragana: 'る' },
		{ romanji: 're', hiragana: 'れ' },
		{ romanji: 'ro', hiragana: 'ろ' },
		{ romanji: 'wa', hiragana: 'わ' },
		{ romanji: 'wo', hiragana: 'を' },
		{ romanji: 'n', hiragana: 'ん' },
		{ romanji: 'ga', hiragana: 'が' },
		{ romanji: 'gi', hiragana: 'ぎ' },
		{ romanji: 'gu', hiragana: 'ぐ' },
		{ romanji: 'ge', hiragana: 'げ' },
		{ romanji: 'go', hiragana: 'ご' },
		{ romanji: 'za', hiragana: 'ざ' },
		{ romanji: 'ji', hiragana: 'じ' },
		{ romanji: 'zu', hiragana: 'ず' },
		{ romanji: 'ze', hiragana: 'ぜ' },
		{ romanji: 'zo', hiragana: 'ぞ' },
		{ romanji: 'da', hiragana: 'だ' },
		{ romanji: 'ji', hiragana: 'ぢ' },
		{ romanji: 'zu', hiragana: 'づ' },
		{ romanji: 'de', hiragana: 'で' },
		{ romanji: 'do', hiragana: 'ど' },
		{ romanji: 'ba', hiragana: 'ば' },
		{ romanji: 'bi', hiragana: 'び' },
		{ romanji: 'bu', hiragana: 'ぶ' },
		{ romanji: 'be', hiragana: 'べ' },
		{ romanji: 'bo', hiragana: 'ぼ' },
		{ romanji: 'pa', hiragana: 'ぱ' },
		{ romanji: 'pi', hiragana: 'ぴ' },
		{ romanji: 'pu', hiragana: 'ぷ' },
		{ romanji: 'pe', hiragana: 'ぺ' },
		{ romanji: 'po', hiragana: 'ぽ' },
		{ romanji: 'kya', hiragana: 'きゃ' },
		{ romanji: 'kyu', hiragana: 'きゅ' },
		{ romanji: 'kyo', hiragana: 'きょ' },
		{ romanji: 'sha', hiragana: 'しゃ' },
		{ romanji: 'shu', hiragana: 'しゅ' },
		{ romanji: 'sho', hiragana: 'しょ' },
		{ romanji: 'ja', hiragana: 'じゃ' },
		{ romanji: 'ju', hiragana: 'じゅ' },
		{ romanji: 'jo', hiragana: 'じょ' }
  ];

  const [input, setInput] = useState('');
  const [current, setCurrent] = useState(0);

  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const [error, setError] = useState(false);

  const setFirstHiragana = () => {
    setCurrent(0);
  }

  const handleNextClick = () => {
    if(current == 0){
		setCurrent(1)
	}
	else if(current === hiragana.length - 1){
		setCurrent(0)
	}
    else{
		setCurrent(current + 1)
	}
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if(input.toLowerCase() === hiragana[current].romanji){
      setStreak(streak + 1)
      setMaxStreak(Math.max(streak + 1,maxStreak))
      setError(false)

      localStorage.setItem('maxStreak', Math.max(streak, maxStreak));
      localStorage.setItem('streak', streak + 1);
    } else {
      setStreak(0);
      setError(`Close! The correct answer for ${hiragana[current].hiragana} is ${hiragana[current].romanji}`);
    
      localStorage.setItem('streak', 0);
    }

    setInput('')
    setRandomHiragana()
  }

  useEffect(() => {
    setFirstHiragana()
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

        <h1 className='text-2xl font-bold uppercase'>Learn Hiragana</h1>
        
	  </header>

	  <div className="text-9xl font-bold mb-8">
		{ hiragana[current].hiragana }
	  </div>
	  <div className="text-9xl font-bold mb-8">
		{ hiragana[current].romanji }
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