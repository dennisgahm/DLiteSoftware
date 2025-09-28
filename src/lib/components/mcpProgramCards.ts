import type { ProgramCards } from "./mccpProgramCards";

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

export const mcpProgramCards : ProgramCards[] = [
    {
        imgsrc: img1, 
        header: "Screening Run Setup",
        content: ["Coordinate Injections with Columns by Completing the Excel Table:",
            "-Line # indicates which Injection # the MCS Program will coordinate",
            "--- i.e. Line 1 corresponds with Injection 1",
            "--- more lines are added as you complete the table",
            "-COM # indicates which Column Selector Unit the MCS Program will command at the time of Injection.",
            "-Port # indicates which port the MCS Program will command the Column Selector Unit (at the corresponding COM #) to select at the time of Injection"]
    }, {
        imgsrc: img2, 
        header: "Screening Run Setup",
        content: ["Coordinate Injections with Columns by Completing the Excel Table:",
            "-Line # indicates which Injection # the MCS Program will coordinate",
            "--- i.e. Line 1 corresponds with Injection 1",
            "--- more lines are added as you complete the table",
            "-COM # indicates which Column Selector Unit the MCS Program will command at the time of Injection.",
            "-Port # indicates which port the MCS Program will command the Column Selector Unit (at the corresponding COM #) to select at the time of Injection"]
    }, {
        imgsrc: img3, 
        header: "Screening Run Setup",
        content: ["Coordinate Injections with Columns by Completing the Excel Table:",
            "-Line # indicates which Injection # the MCS Program will coordinate",
            "--- i.e. Line 1 corresponds with Injection 1",
            "--- more lines are added as you complete the table",
            "-COM # indicates which Column Selector Unit the MCS Program will command at the time of Injection.",
            "-Port # indicates which port the MCS Program will command the Column Selector Unit (at the corresponding COM #) to select at the time of Injection"]
    }, {
        imgsrc: img4, 
        header: "Screening Run Setup",
        content: ["Coordinate Injections with Columns by Completing the Excel Table:",
            "-Line # indicates which Injection # the MCS Program will coordinate",
            "--- i.e. Line 1 corresponds with Injection 1",
            "--- more lines are added as you complete the table",
            "-COM # indicates which Column Selector Unit the MCS Program will command at the time of Injection.",
            "-Port # indicates which port the MCS Program will command the Column Selector Unit (at the corresponding COM #) to select at the time of Injection"]
    }, {
        imgsrc: img5, 
        header: "Screening Run Start",
        content: ["Program:",
            "-Starts Timers",
            "--- Current Injection Time",
            "--- Screening Run Time",
            "-Waits for ChemStation to make the 1st Injection",
            "--- May take some time as the HPLC System reaches method parameters",
            "Assume a 10min (600sec) method for each injection (10 injections total) in this example."]
    }, {
        imgsrc: img6, 
        header: "1st Injection Coordination",
        content: ["ChemStation begins to make the 1st Injection with the HPLC System.",
            "The MCS Program senses the 1st Injection and commands the Column Selector Unit associated with COM-1 to select Port-1 (Column-01).",
            "The right-facing triangle and blue highlight moves to Line 1 to indicate the currently selected Port=Column.",
            "Current Injection Timer is reset; Screening Run Timer continues."]
    }, {
        imgsrc: img7, 
        header: "1st Injection Coordination",
        content: ["Assuming a 10min (600sec) method for each injection, the 1st Injection is at its halfway point.",
            "The Current Injection Timer and Screening Run Timer accrues 300 seconds."]
    }, {
        imgsrc: img8, 
        header: "2nd Injection Coordination",
        content: ["The 10min (600sec) method for the 1st Injection is completed and ChemStation begins to make the 2nd Injection with the HPLC System.",
            "The MCS Program senses the 2nd Injection and commands the Column Selector Unit associated with COM-1 to select Port-2 (Column-02).",
            "The right-facing triangle and blue highlight moves to Line 2 to indicate the currently selected Port=Column.",
            "Current Injection Timer is reset; Screening Run Timer continues."]
    }, {
        imgsrc: img9, 
        header: "2nd Injection Coordination",
        content: ["Assuming a 10min (600sec) method for each injection, the 2nd Injection is at its halfway point.",
            "The Current Injection Timer and Screening Run Timer accrues 300 seconds."]
    }, {
        imgsrc: img10, 
        header: "3rd Injection Coordination",
        content: ["The 10min (600sec) method for the 2nd Injection is completed and ChemStation begins to make the 3rd Injection with the HPLC System.",
            "The MCS Program senses the 3rd Injection and commands the Column Selector Unit associated with COM-1 to select Port-3 (Column-03).",
            "The right-facing triangle and blue highlight moves to Line 3 to indicate the currently selected Port=Column.",
            "Current Injection Timer is reset; Screening Run Timer continues."]
    }, {
        imgsrc: img11, 
        header: "6th Injection Coordination",
        content: ["Skipping forward, the 10min (600sec) method for the 5th Injection is completed and ChemStation begins to make the 6th Injection with the HPLC System.",
            "The MCS Program senses the 6th Injection and commands the Column Selector Unit associated with COM-1 to select Port-6 (Column-06).",
            "The right-facing triangle and blue highlight moves to Line 6 to indicate the currently selected Port=Column.",
            "Current Injection Timer is reset; Screening Run Timer continues."]
    }, {
        imgsrc: img12, 
        header: "9th Injection Coordination",
        content: ["Skipping forward, the 10min (600sec) method for the 8th Injection is completed and ChemStation begins to make the 9th Injection with the HPLC System.", 
            "The MCS Program senses the 9th Injection and commands the Column Selector Unit associated with COM-1 to select Port-9 (Column-09).",
            "The right-facing triangle and blue highlight moves to Line 9 to indicate the currently selected Port=Column.",
            "Current Injection Timer is reset; Screening Run Timer continues. "]
    }, {
        imgsrc: img13, 
        header: "9th Injection Coordination",
        content: ["Assuming a 10min (600sec) method for each injection, the 9th Injection is at its halfway point.",
            "The Current Injection Timer and Screening Run Timer accrues 300 seconds."]
    }, {
        imgsrc: img14, 
        header: "10th Injection Coordination",
        content: ["The 10min (600sec) method for the 9th Injection is completed and ChemStation begins to make the 10th (and last) Injection with the HPLC System.",
            "The MCS Program senses the 10th Injection and commands the Column Selector Unit associated with COM-1 to select Port-10 (Column-10).",
            "As no injections remain, the blue highlight is removed, the Timers are reset, and the MCS Program is stopped.",
            "Meanwhile, ChemStation continues, and completes, the 10min (600sec) method for the 10th Injection."]
    }
]