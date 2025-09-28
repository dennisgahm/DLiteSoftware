import img1 from "$lib/assets/mccp-program/1.webp"
import img2 from "$lib/assets/mccp-program/2.webp"
import img3 from "$lib/assets/mccp-program/3.webp"
import img4 from "$lib/assets/mccp-program/4.webp"
import img5 from "$lib/assets/mccp-program/5.webp"
import img6 from "$lib/assets/mccp-program/6.webp"
import img7 from "$lib/assets/mccp-program/7.webp"
import img8 from "$lib/assets/mccp-program/8.webp"
import img9 from "$lib/assets/mccp-program/9.webp"
import img10 from "$lib/assets/mccp-program/10.webp"
import img11 from "$lib/assets/mccp-program/11.webp"
import img12 from "$lib/assets/mccp-program/12.webp"
import img13 from "$lib/assets/mccp-program/13.webp"
import img14 from "$lib/assets/mccp-program/14.webp"
import img15 from "$lib/assets/mccp-program/15.webp"
import img16 from "$lib/assets/mccp-program/16.webp"
import img17 from "$lib/assets/mccp-program/17.webp"

export type ProgramCards = {
    imgsrc: string;
    header: string;
    subheader?: string;
    content: string[];
  };

export const mccpProgramCards : ProgramCards[] = [
    {
        imgsrc: img1, 
        header: "C&P Run Setup",
        content: ["Choose Desired Columns (1/3/6/7/8  --  5 Columns Total)",
            "Define C&P Duration for Each Column(10min. Each)",
            "Check Communication via Current Port Display(Click Port 4 and Observe Column Selector Unit Move to Port 4)"]
    }, {
        imgsrc: img2, 
        header: "C&P Run Start",
        content: ["Program:", 
            "*Selects First Column (1)", 
            "*Starts Timers",
            "--- Current Column Processed Time",
            "--- Total C&P Run Time",
            "*Disables Screen Options",
            "*Enables Stop Button"]
    }, {
        imgsrc: img3,
        header: "Column 1 Processing",
        content: ["Column 1 begins its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
            "(First of five columns selected)"]
    }, {
        imgsrc: img4,
        header: "Column 1 Processing",
        content: ["Column 1 nearly completes its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
            "Program will select next column (3) at 10min (600sec) mark."]
    }, {
        imgsrc: img5,
        header: "Switch to Column 3",
        content: ["At the 10min (600sec) mark, Port 3 = Column 3 is selected (see also the Current Port Display).",
            "Column Timer is reset; Total Timer continues."]
    }, {
        imgsrc: img6,
        header: "Column 3 Processing",
        content: ["Column 3 begins its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
            "(Second of five columns selected)"]
    }, {
        imgsrc: img7,
        header: "Column 3 Processing",
        content: ["Column 3 nearly completes its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
            "Program will select next column (6) at 20min (1200sec) mark."]
    }, {
        imgsrc: img8, 
        header: "Switch to Column 6",
        content: ["At the 20min (1200sec) mark, Port 6 = Column 6 is selected (see also the Current Port Display).",
            "Column Timer is reset; Total Timer continues."]
    }, {
        imgsrc: img9,
        header: "Column 6 Processing",
        content: ["Column 6 begins its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
            "(Third of five columns selected)"]
    }, {
        imgsrc: img10, 
        header: "Column 6 Processing",
        content: ["Column 6 nearly completes its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
            "Program will select next column (7) at 30min (1800sec) mark."]
    }, {
        imgsrc: img11, 
        header: "Switch to Column 7",
        content: ["At the 30min (1800sec) mark, Port 7 = Column 7 is selected (see also the Current Port Display).",
            "Column Timer is reset; Total Timer continues."]
    }, {
        imgsrc: img12, 
        header: "Column 7 Processing",
        content: ["Column 7 begins its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
            "(Fourth of five columns selected)"]
    }, {
        imgsrc: img13, 
        header: "Column 7 Processing",
        content: ["Column 7 nearly completes its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
            "Program will select next column (8) at 40min (2400sec) mark."]
    }, {
        imgsrc: img14, 
        header: "Switch to Column 8",
        content: ["At the 40min (2400sec) mark, Port 8 = Column 8 is selected (see also the Current Port Display).",
            "Column Timer is reset; Total Timer continues."]
    }, {
        imgsrc: img15, 
        header: "Column 8 Processing",
        content: ["Column 8 begins its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
            "(Last of five columns selected)"]
    }, {
        imgsrc: img16, 
        header: "Column 8 Processing",
        content: ["Column 8 nearly completes its 10min (600sec) Cleaning & Pre-Conditioning cycle.",
            "Program will finish the C&P Run at the 50min (3000sec) mark."]
    }, {
        imgsrc: img17, 
        header: "End of C&P Run",
        content: ["At the 50min (3000sec) mark, all columns (1/3/6/7/8) have been processed for 10min each.",
            "Timers are reset, Options are re-enabled, Current Port remains on last selected column (8)."]
    }
]
  