# Epicodus Track Suggester

#### A survey for potential courses of study at Epicodus, 10-20-2017

#### By **Luke Bertram**

## Description

Track Suggester is a survey of interests designed to help a user determine which of the available courses of study at [Epicodus](http://epicodus.com) (a code school based in Seattle, WA and Portland, OR) might be the best fit for them.

Users answer the questions on the survey form and then submit this form. Upon submission, the page will reveal which track (_Ruby/Rails, PHP/Drupal, Java/Android, CSS/Design, or C#/.NET_) is the best fit for the user according to the answers provided.

## Setup/Installation Requirements

For greatest ease of use, simply visit [this website](http://lukebertram.github.io/track-suggester) in your web browser of choice. However, if you're feeling frisky, you can also use the following steps to clone the project from [GitHub](http://github.com) and run it locally on your own computer:

* Visit the github page for [this project](http://github.com/lukebertram/track-suggester)
* Click the "Clone or Download" button and copy the address found there. Alternatively, just copy this address to your clipboard: https://github.com/lukebertram/track-suggester.git
* Access your system's command line interface (_ie Terminal, for MacOS Users_) and navigate to your home directory by entering the following magical spell into your command line (note: do not enter the '$' character):
>$cd ~

* Next, cast the following, more advanced spell:  
>$git clone https://github.com/lukebertram/track-suggester.git

* Finally, open the project in your system's default web browser with the following final incantation:
>$open track-suggester/index.html

## Known Bugs

Not every available track is covered by this tool. At present, it is only possible to receive a suggestion for one or two of three total options (React, Java, or Rails tracks).

## Support and contact details

If something about this project really sticks in your craw and you just need call me on it, you can email me at [lukebertram@gmail.com](mailto:lukebertram@gmail.com)

## Technologies Used

The bulk of this project consists of a radio-button-heavy HTML form and branching logic written in JQuery/JavaScript. When the form is submitted, the usual post request is suppressed by javascript, and the answers are gathered from the form via JQuery.

### License

MIT License

Copyright (c) 2017 Luke Bertram
