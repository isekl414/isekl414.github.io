//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    return {
        nChars: getNchars(txt),
        nWords: getNwords(txt),
        nLines: getNlines(txt),
        nNonEmptyLines: getNnonEmptyLines(txt),
        averageWordLength: getAverageWordLength(txt),
        maxLineLength: getMaxLineLength(txt),
        palindromes: getPalindromes(txt),
        longestWords: getLongestwords(txt),
        mostFrequentWords: getMostFrequentWords(txt)
    };
}

  function getNchars(txt){
    return txt.length;
  }

  function getNwords(txt){
    if (txt.trim().length == 0)
    {
      return 0;
    }
    else{
      return txt.match(/(\w+)/g).length;
      }
  }

  function getNlines(txt){
    if (txt.length == 0)
    {
      return 0;
    }
    else
    {
      return txt.split(/\n/).length;
    }

  }
  function getNnonEmptyLines(txt){

    if (txt.trim().length == 0)
    {
      return 0;
    }
    else{
      return txt.trim().split(/\s+\n+|\n+/).length;
    }
  }


  function getAverageWordLength(txt){
    var wordcount =getNwords(txt);
    if (wordcount == 0)
    {
      return 0
    }
    else
    {
      var wordArr = txt.match(/(\w+)/g);
      var NwordChar = 0;
      for (var i = 0; i < wordcount; i++)
      {
        NwordChar += wordArr[i].length;
      }
      var AveWordLength = NwordChar/wordcount;

      return AveWordLength;
    }
  }

  function getMaxLineLength(txt){
    var lineArr = txt.split(/\n/);
    var maxline = 0;
    for (var i =0; i < lineArr.length; i++)
    {
      if (lineArr[i].length>maxline)
      {
        maxline = lineArr[i].length;
      }
    }
    return maxline;
  }

  function getPalindromes(txt){
    var wordcount =getNwords(txt);
    var PalArr = [];
    if (wordcount == 0)
    {
      return PalArr;
    }
    else
    {
      var wordArr = txt.toLowerCase().match(/(\w+)/g);
      for(var i = 0; i < wordArr.length ; i++)
      {
        if (wordArr[i] == wordArr[i].split('').reverse().join('') && wordArr[i].length > 2)
        {
          PalArr.push(wordArr[i]);
        }
      }
      return PalArr;
    }
  }

  function getLongestwords(txt){
    var wordcount =getNwords(txt);
        var longestWords =[];
    if (wordcount == 0)
    {
      return  longestWords =[];
    }
    else
    {
      var wordArr = txt.toLowerCase().match(/(\w+)/g).sort().sort(function(a, b){return b.length - a.length});
      var fill = 10;
      var newarr = [wordArr[0]];
      for (var j=1; j<wordArr.length; j++) {
         if (wordArr[j]!=wordArr[j-1])
         {
           newarr.push(wordArr[j]);
         }
      }

      if (newarr.length<fill)
      {
        fill = newarr.length;
      }
      for(var i = 0 ;  i < fill ; i++)
      {
        longestWords.push(newarr[i]);
      }
      return longestWords;
    }
  }

  function getMostFrequentWords(txt){
    var wordcount =getNwords(txt);
    var FrequentWords =[];
    if (wordcount == 0)
    {
      return  FrequentWords =[];
    }
    else
    {
      var array = txt.toLowerCase().match(/(\w+)/g);
      var frequency = {}, value;

      for(var i = 0; i < array.length; i++) {
        value = array[i];
        if(value in frequency) {
          frequency[value]++;
        }
        else {
          frequency[value] = 1;
        }
      }
      for(value in frequency) {
        FrequentWords.push(value);
      }

      FrequentWords.sort(function(a, b) {return frequency[b] - frequency[a]});

      while (FrequentWords.length>10)
      {
        FrequentWords.pop();
      }
      for(var n =0; n<FrequentWords.length;n++)
      {
        FrequentWords[n] = FrequentWords[n] + '('+frequency[FrequentWords[n]]+')';
      }

      return FrequentWords;

      }

  }
