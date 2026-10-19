async page => {
  const hue=page.getByRole('slider',{name:'Hue',exact:true}).first();
  const color=page.getByRole('slider',{name:'Color',exact:true}).first();
  const read=()=>page.evaluate(()=>document.body.style.backgroundColor);
  const states=[await read()];
  await page.waitForTimeout(2000);
  await hue.click({button:'right',position:{x:160,y:10}});
  states.push(await read());
  await page.waitForTimeout(5000);
  await color.click({button:'middle',position:{x:85,y:70}});
  states.push(await read());
  await page.waitForTimeout(5000);
  await hue.click({button:'right',position:{x:70,y:10}});
  states.push(await read());
  await page.waitForTimeout(3000);
  const box=await hue.boundingBox();
  await page.mouse.move(box.x+70,box.y+10);
  await page.mouse.down();
  await page.mouse.move(box.x+180,box.y+10,{steps:70});
  await page.mouse.up();
  states.push(await read());
  await page.waitForTimeout(3000);
  return states;
}
