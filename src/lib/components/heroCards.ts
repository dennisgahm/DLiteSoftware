import MCCPS_system_program from "$lib/assets/hero-images/MCCPS_system_program.webp";
import cleaning_columns_automation from "$lib/assets/hero-images/cleaning_columns_automation.webp";
import multiple_column_screening from "$lib/assets/hero-images/multiple_column_screening.webp";
import textbook_information_extraction from "$lib/assets/hero-images/textbook_information_extraction.webp";
import column_selector_unit_fv from "$lib/assets/hero-images/column_selector_unit_fv.webp";
import column_selector_unit_sv from "$lib/assets/hero-images/column_selector_unit_sv.webp.webp";
import column_screener_valve_HPLC from "$lib/assets/hero-images/column_screener_valve_HPLC.webp";
import example_column_setup from "$lib/assets/hero-images/example_column_setup.webp";
import accelerated_chromotogram_analysis from "$lib/assets/hero-images/accelerated_chromotogram_analysis.webp";
import sequence_table_building from "$lib/assets/hero-images/sequence_table_building.webp";
import automated_column_screening from "$lib/assets/hero-images/automated_column_screening.webp"
import chiral_technologies from "$lib/assets/hero-images/chiral_technologies.webp"
import sielc_technologies from "$lib/assets/hero-images/sielc_technologies.webp"

export type ExampleCards = {
  imgsrc: string;
  header: string;
  subheader?: string;
  content: string;
  link: string;
};

export const CarouselCards: ExampleCards[] = [
  {
    imgsrc: MCCPS_system_program,
    header: "MCCPS (Chemistry Screening Automation)",
    content:
      "Allows you to automatically clean your columns for 5 minutes each.  Then, you can create an ordered list of columns you want to be executed for each injection on ChemStation.",
    link: "/mccps-system",
  },
  {
    imgsrc: cleaning_columns_automation,
    header: "Cleaning Columns Automation",
    content:
      "Automatically cleans each column for a specified number of minutes.  You can also manually control the Valve.",
    link: "#",
  },
  {
    imgsrc: multiple_column_screening,
    header: "Screen Columns in Rapid Succession",
    content:
      "The MCS Program allows you to create an ordered list of columns that are executed for chromatography on each injection of the HPLC ChemStation.",
    link: "#",
  },
  {
    imgsrc: textbook_information_extraction,
    header: "Textbook Information Extraction for College Book Store",
    content:
      "This program extracts textbook information from a website and creates an excel file with the organized information.",
    link: "#",
  },
  {
    imgsrc: column_selector_unit_fv,
    header: "Column Selector Unit Front View",
    content:
      "Here you see the Column Selector Unit of the MCCPS System with ten 150mm columns installed.This unit will direct the flow of the mobile phase in accordance with the sequences defined in the MCCP and MCS Programs to clean & pre-condition and screen all ten columns in two easy processes.",
    link: "#",
  },
  {
    imgsrc: column_selector_unit_sv,
    header: "Column Selector Unit Side View",
    content:
      "Here you see the Column Selector Unit of the MCCPS System with ten 150mm columns installed.This unit will direct the flow of the mobile phase in accordance with the sequences defined in the MCCP and MCS Programs to clean & pre-condition and screen all ten columns in two easy processes.",
    link: "#",
  },
  {
    imgsrc: column_screener_valve_HPLC,
    header:
      "Column Screener Valve with HPLC (High Performance Liquid Chromatography)",
    content:
      "The MCCPS System Column Selector Unit has the smallest lab footprint and highest column capacity, holding up to ten 150mm length columns within a cubic foot of space.Its minimal footprint also allows the unit to be placed directly in front of the HPLC System to minimize band broadening.",
    link: "#",
  },
  {
    imgsrc: example_column_setup,
    header: "Example Column Setup",
    content:
      "Mobile Phase from HPLC System or Sample Injector enters through the IN valve-head, passes through currently selected column, and exits through the OUT valve-head to any given detection method.",
    link: "#",
  },
  {
    imgsrc: accelerated_chromotogram_analysis,
    header: "Accelerated Chromatogram Analysis",
    content:
      "The Chromatogram Stacking Program displaying 20 chromatograms.A chromatogram from this group is shown zoomed-in in its Pop-Out Window.",
    link: "#",
  },
  {
    imgsrc: sequence_table_building,
    header: "Streamlined Sequence Table Building",
    content:
      "The Sequence Builder showing a preview of its constructed sequence table.  Never build a sequence table line-by-line, cell-by-cell again.  Easily create and save a detailed sequence table to import directly into ChemStation.",
    link: "#",
  },
];

export const ProductCards: ExampleCards[] = [
  {
    imgsrc: MCCPS_system_program,
    header: "MCCPS System",
    content:
      "Automate your station with the MCCPS System and utilize its task specialization to make your method development up to 50% faster!",
    link: "/mccps-system",
  },
  {
    imgsrc: cleaning_columns_automation,
    header: "MCCP Program",
    subheader: "Multiple Column Cleaning & Pre-Conditioning",
    content:
      "Hands-free cleaning and pre-conditioning for up to 10 columns all at once",
    link: "/mccp-program",
  },
  {
    imgsrc: multiple_column_screening,
    header: "​MCS Program",
    subheader: "Multiple Column Screening",
    content: "Hands-free column screening for up to 10 columns all at once.",
    link: "/mcs-program",
  },
  {
    imgsrc: accelerated_chromotogram_analysis,
    header: "​Chromatogram Stacking Program",
    content:
      "Convenient, easy, and faster way to view and compare chromatograms from your method development process.",
    link: "/chromatogram-stacking-program",
  },
  {
    imgsrc: automated_column_screening,
    header: "Automated Column Screening",
    subheader: "Automated Column Screening Package",
    content:
      "Save on automating your method development by purchasing this product bundle!",
    link: "/acs-package",
  },
  {
    imgsrc: sequence_table_building,
    header: "Sequence Builder",
    content:
      "Greatly simplify the task of sequence table building with this easy-to-use program!",
    link: "/sequence-builder",
  },
];

export const HPLCProductCards: ExampleCards[] = [
  {
    imgsrc: chiral_technologies,
    header: "Chiral Technologies",
    subheader: "Immobilized Polysaccharide CSPs",
    content:
      "The Chromatography of chiral molecules is a simple and elegant technique for rapid isolation of enantiomers of high purity.  The chromatography of enantiomers relies on the availability of chiral stationary phases specifically designed to separate chiral molecules.  In the last two decades, chiral stationary phases (CSPs) have become readily available.  Daicel CSPs are the most widely employed stationary phases in the pharmaceutical industry to isolate pure enantiomers.",
    link: "/chiral-technologies",
  },
  {
    imgsrc: sielc_technologies,
    header: "Mixed-Mode Columns",
    subheader: "Multiple Column Cleaning & Pre-Conditioning",
    content:
      "Primesep Columns, with innovative mixed-mode and SWITCH Phase Technology, are highly versatile and can separate a tremendous range of compounds.",
    link: "/sielc-technologies",
  },
]