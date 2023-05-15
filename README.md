TERRIBLY TINY TALES ASSIGNMENT

Home Component 

Submit button 
The start button which receives an onClick listener which gets a callback function getData()

getData()
This is an asynchronous function which is responsible for three tasks:
1.	Fetching the text- Simply fetching data using fetch API 
2.	Finding the frequency of the words and – Firstly we are creating wordFreqMap which is an object to keep the track of the word and their frequency. Using forEach function we are traversing the words (an array created using the split() on text with a separator  “ ”  to split out the text in to array of words) and if the word is in the object it will increase the count and if not then it will create a new entry in the object with word as key and frequency as value.
sortedFreq is an array of sorted words and the sliced down to Top 20 words with the most frequency. Here using the Object.key function on wordFreqMap we are accessing the key (i.e word) in the objects and sorting them according to their frequency using the sort function
sort((a,b)=>wordFreqMap[b] – wordFreqMap[a]
The sort() method is used with the callback function that takes two argument ‘a’ and ‘b’. the function returns a negative vale if ‘a’ should come before ‘b’ and positive value if ‘a’ should come after ‘b’ and ) for equality. We are sorting the array in the descending order of words’ frequency, so we subtract wordFreqMap[a] from wordFreqMap[b] to ensure that the higher frequency count are sorted before words lower frequency count. 
graphData() – is an array of objects which contains top 20 most occurring words with their frequencies. Here we use map() to map over sortedFreq and for each word we create a new object with word and its frequency. To get the frequency we simply access the words freq using wordFreqMap[word] which returns the value of the key. 
3.	Setting the flag that ensure the switching of the submit button and the histogram on click and sets the flag = true 
4.	Setting the loadflag which here is used for switching the button text ‘Submit’ to ‘loading Animation. setTimeout is just added to show the loading functionality


Chart Component

Chart component contains a barchart and and export button to export the file 
Histogram- a chart made using Recharts (A composable charting library built on React components). It contains different components provided by the rechart library
1.	ResponsiveContainer- used to make the container responsive with 100% width of the screen and height of 400px
2.	BarChart- The bar chart displays data using a number of bars, each representing a particular category. The component receives the data 
3.	XAxis – used to define what to show on x axis
4.	YAxis – defines the y-axis  
5.	ToolTip- to show the value of var on hover
6.	Bar – used to display data value and bars and define the color and shape
CSVLink
A component of react-csv library and is used to convert data to csv file. This data can be an array of arrays, an array of literal objects, or strings.

data-context 
A context which stores the data of the histogram to pass to the child component and which can also be used in the made for future use without prop drilling. 

libraries used 
1.	react-csv 
2.	react-router-dom
3.	recharts





