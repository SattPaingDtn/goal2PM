# 🌐 Anytime & Anywhere Access Guide
*(နေရာမရွေး၊ အချိန်မရွေး ဖတ်ရှုနိုင်ရန် Deploy ပြုလုပ်နည်း)*

ဤ Website ကို သင်၏ GitHub အကောင့်သို့ တင်ပြီး **GitHub Pages** (သို့မဟုတ် **Vercel**) ဖြင့် Free Hosting ပြုလုပ်ထားပါက ဖုန်း၊ iPad၊ Tablet၊ Laptop မည်သည့်စက်ပစ္စည်းမှမဆို Internet browser ဖွင့်၍ အချိန်မရွေး လေ့လာနိုင်မည် ဖြစ်ပါသည်။

---

## နည်းလမ်း (၁) GitHub Pages ဖြင့် အခမဲ့ တင်နည်း (အကြံပြုချက်)

### အဆင့် ၁: GitHub တွင် Repository အသစ်တစ်ခု ဆောက်ပါ
1. [github.com](https://github.com) သို့ သွား၍ အကောင့်ဝင်ပါ။
2. **New Repository** ကို နှိပ်ပါ။
3. Repository name နေရာတွင် `goal2PM` (သို့မဟုတ် နှစ်သက်ရာအမည်) ဟု ပေးပါ။
4. Public သို့မဟုတ် Private ရွေးချယ်ပြီး **Create repository** ကို နှိပ်ပါ။

### အဆင့် ၂: လက်ရှိ Project ကို GitHub သို့ Push လုပ်ပါ
Terminal တွင် အောက်ပါ command များကို ရိုက်ထည့်ပါ:
```bash
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/goal2PM.git
git branch -M main
git push -u origin main
```

### အဆင့် ၃: GitHub Pages တွင် Actions ကို ဖွင့်ပါ
1. GitHub ရှိ သင်၏ repository > **Settings** သို့ သွားပါ။
2. ဘယ်ဘက် menu မှ **Pages** ကို နှိပ်ပါ။
3. **Build and deployment** အောက်ရှိ **Source** နေရာတွင် **GitHub Actions** ကို ရွေးချယ်ပေးပါ။
4. မိနစ်အနည်းငယ်အတွင်း `https://<YOUR_GITHUB_USERNAME>.github.io/goal2PM/` ဟူသော Live Link ဖြင့် Website တက်လာပါမည်။

---

## နည်းလမ်း (၂) Vercel ဖြင့် တင်နည်း (အလွန်မြန်ဆန်သော နည်းလမ်း)
1. [vercel.com](https://vercel.com) သို့ သွား၍ GitHub အကောင့်ဖြင့် Sign in လုပ်ပါ။
2. **Add New... > Project** ကို နှိပ်ပါ။
3. သင်၏ `goal2PM` repository ကို ရွေးပြီး **Import** နှိပ်ပါ။
4. Framework Preset တွင် VitePress ကို အလိုအလျောက် သိရှိပါမည်။ **Deploy** ကို နှိပ်ရုံဖြင့် ချက်ချင်း Live Link ရရှိပါမည်။

---

## 📱 ဖုန်း၏ Home Screen ပေါ်တင်၍ App သဖွယ် ဖတ်ရှုနည်း

- **iPhone / iPad (Safari):**
  Website သို့ သွားပါ > အောက်ဘက်ရှိ **Share (မျှဝေရန် ခလုတ်)** ကို နှိပ်ပါ > **Add to Home Screen** ကို ရွေးပါ။
- **Android (Chrome):**
  Website သို့ သွားပါ > ညာဘက်အပေါ်ရှိ **အစက် ၃ စက် (Menu)** ကို နှိပ်ပါ > **Add to Home screen** သို့မဟုတ် **Install app** ကို ရွေးပါ။

ယခုဆိုလျှင် App တစ်ခုကဲ့သို့ တစ်ချက်နှိပ်ရုံဖြင့် အချိန်မရွေး၊ နေရာမရွေး သင်ခန်းစာများနှင့် ဝေါဟာရများကို ပြန်လည်နွှေးနိုင်ပြီ ဖြစ်ပါသည်။
