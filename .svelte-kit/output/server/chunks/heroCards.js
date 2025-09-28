const MCCPS_system_program = "/_app/immutable/assets/MCCPS_system_program.C4lJ0GYF.webp";
const cleaning_columns_automation = "/_app/immutable/assets/cleaning_columns_automation.ugxWd3JL.webp";
const multiple_column_screening = "/_app/immutable/assets/multiple_column_screening.DyerACfC.webp";
const textbook_information_extraction = "/_app/immutable/assets/textbook_information_extraction.DVEwtSSI.webp";
const column_selector_unit_fv = "/_app/immutable/assets/column_selector_unit_fv.CUopX4SI.webp";
const column_selector_unit_sv = "/_app/immutable/assets/column_selector_unit_sv.webp.CJBoet5M.webp";
const column_screener_valve_HPLC = "/_app/immutable/assets/column_screener_valve_HPLC.D5G8oebr.webp";
const example_column_setup = "/_app/immutable/assets/example_column_setup.B-2S9Yb6.webp";
const accelerated_chromotogram_analysis = "/_app/immutable/assets/accelerated_chromotogram_analysis.D-gnwYnb.webp";
const sequence_table_building = "/_app/immutable/assets/sequence_table_building.I0Npkc-d.webp";
const automated_column_screening = "/_app/immutable/assets/automated_column_screening.ijcfTH55.webp";
const chiral_technologies = "/_app/immutable/assets/chiral_technologies.37v6xTzW.webp";
const sielc_technologies = "/_app/immutable/assets/sielc_technologies.DspC_m4S.webp";
const CarouselCards = [
  {
    imgsrc: MCCPS_system_program,
    header: "MCCPS (Chemistry Screening Automation)",
    content: "Allows you to automatically clean your columns for 5 minutes each.  Then, you can create an ordered list of columns you want to be executed for each injection on ChemStation.",
    link: "/mccps-system"
  },
  {
    imgsrc: cleaning_columns_automation,
    header: "Cleaning Columns Automation",
    content: "Automatically cleans each column for a specified number of minutes.  You can also manually control the Valve.",
    link: "#"
  },
  {
    imgsrc: multiple_column_screening,
    header: "Screen Columns in Rapid Succession",
    content: "The MCS Program allows you to create an ordered list of columns that are executed for chromatography on each injection of the HPLC ChemStation.",
    link: "#"
  },
  {
    imgsrc: textbook_information_extraction,
    header: "Textbook Information Extraction for College Book Store",
    content: "This program extracts textbook information from a website and creates an excel file with the organized information.",
    link: "#"
  },
  {
    imgsrc: column_selector_unit_fv,
    header: "Column Selector Unit Front View",
    content: "Here you see the Column Selector Unit of the MCCPS System with ten 150mm columns installed.This unit will direct the flow of the mobile phase in accordance with the sequences defined in the MCCP and MCS Programs to clean & pre-condition and screen all ten columns in two easy processes.",
    link: "#"
  },
  {
    imgsrc: column_selector_unit_sv,
    header: "Column Selector Unit Side View",
    content: "Here you see the Column Selector Unit of the MCCPS System with ten 150mm columns installed.This unit will direct the flow of the mobile phase in accordance with the sequences defined in the MCCP and MCS Programs to clean & pre-condition and screen all ten columns in two easy processes.",
    link: "#"
  },
  {
    imgsrc: column_screener_valve_HPLC,
    header: "Column Screener Valve with HPLC (High Performance Liquid Chromatography)",
    content: "The MCCPS System Column Selector Unit has the smallest lab footprint and highest column capacity, holding up to ten 150mm length columns within a cubic foot of space.Its minimal footprint also allows the unit to be placed directly in front of the HPLC System to minimize band broadening.",
    link: "#"
  },
  {
    imgsrc: example_column_setup,
    header: "Example Column Setup",
    content: "Mobile Phase from HPLC System or Sample Injector enters through the IN valve-head, passes through currently selected column, and exits through the OUT valve-head to any given detection method.",
    link: "#"
  },
  {
    imgsrc: accelerated_chromotogram_analysis,
    header: "Accelerated Chromatogram Analysis",
    content: "The Chromatogram Stacking Program displaying 20 chromatograms.A chromatogram from this group is shown zoomed-in in its Pop-Out Window.",
    link: "#"
  },
  {
    imgsrc: sequence_table_building,
    header: "Streamlined Sequence Table Building",
    content: "The Sequence Builder showing a preview of its constructed sequence table.  Never build a sequence table line-by-line, cell-by-cell again.  Easily create and save a detailed sequence table to import directly into ChemStation.",
    link: "#"
  }
];
const ProductCards = [
  {
    imgsrc: MCCPS_system_program,
    header: "MCCPS System",
    content: "Automate your station with the MCCPS System and utilize its task specialization to make your method development up to 50% faster!",
    link: "/mccps-system"
  },
  {
    imgsrc: cleaning_columns_automation,
    header: "MCCP Program",
    subheader: "Multiple Column Cleaning & Pre-Conditioning",
    content: "Hands-free cleaning and pre-conditioning for up to 10 columns all at once",
    link: "/mccp-program"
  },
  {
    imgsrc: multiple_column_screening,
    header: "​MCS Program",
    subheader: "Multiple Column Screening",
    content: "Hands-free column screening for up to 10 columns all at once.",
    link: "/mcs-program"
  },
  {
    imgsrc: accelerated_chromotogram_analysis,
    header: "​Chromatogram Stacking Program",
    content: "Convenient, easy, and faster way to view and compare chromatograms from your method development process.",
    link: "/chromatogram-stacking-program"
  },
  {
    imgsrc: automated_column_screening,
    header: "Automated Column Screening",
    subheader: "Automated Column Screening Package",
    content: "Save on automating your method development by purchasing this product bundle!",
    link: "/acs-package"
  },
  {
    imgsrc: sequence_table_building,
    header: "Sequence Builder",
    content: "Greatly simplify the task of sequence table building with this easy-to-use program!",
    link: "/sequence-builder"
  }
];
const HPLCProductCards = [
  {
    imgsrc: chiral_technologies,
    header: "Chiral Technologies",
    subheader: "Immobilized Polysaccharide CSPs",
    content: "The Chromatography of chiral molecules is a simple and elegant technique for rapid isolation of enantiomers of high purity.  The chromatography of enantiomers relies on the availability of chiral stationary phases specifically designed to separate chiral molecules.  In the last two decades, chiral stationary phases (CSPs) have become readily available.  Daicel CSPs are the most widely employed stationary phases in the pharmaceutical industry to isolate pure enantiomers.",
    link: "/chiral-technologies"
  },
  {
    imgsrc: sielc_technologies,
    header: "Mixed-Mode Columns",
    subheader: "Multiple Column Cleaning & Pre-Conditioning",
    content: "Primesep Columns, with innovative mixed-mode and SWITCH Phase Technology, are highly versatile and can separate a tremendous range of compounds.",
    link: "/sielc-technologies"
  }
];
export {
  CarouselCards as C,
  HPLCProductCards as H,
  ProductCards as P
};
