// Helper function to apply a color scale to the rankings

export function colorMatcher(val) {


  const greaterThan95 = '#006700';
  const greaterThan90 = '#00ae00';
  const greaterThan85 = '#00ff00';
  const greaterThan80 = '	#a9ff00';
  const greaterThan75 = '#f8e000';
  const greaterThan70 = '#ffd839';
  const greaterThan65 = '#ffa900';
  const greaterThan60 = '#ff9000';
  const greaterThan55 = '#ff6900';
  const greaterThan50 = '#ff4f00';
  const lessThan50 = '#ff0000';

  let outputColor = '';


  switch (true) {

    case val >= 95:
      outputColor = greaterThan95;
      break;

    case val >= 90:
      outputColor = greaterThan90;
      break;

    case val >= 85:
      outputColor = greaterThan85;
      break;
      
    case val >= 80:
      outputColor = greaterThan80;
      break;

    case val >= 75:
      outputColor = greaterThan75;
      break;

    case val >= 70:
      outputColor = greaterThan70;
      break;

    case val >= 65:
      outputColor = greaterThan65;
      break;

    case val >= 60:
      outputColor = greaterThan60;
      break;

    case val >= 55:
      outputColor = greaterThan55;
      break;

    case val >= 50:
      outputColor = greaterThan50;
      break;

    case val < 50:
      outputColor = lessThan50;
      break;
  }

  return outputColor;
}